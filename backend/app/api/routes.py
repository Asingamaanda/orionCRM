from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.rbac import can_access
from app.core.security import create_access_token
from app.database import SessionLocal
from app.models.entities import ActivityEvent, AuditLog, ContentWorkflow, ExecutiveMetric, LeadPipeline, Notification, SeoExecutionWorkflow, SessionToken, User, WorkflowTask

router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def dev_user():
    return {"id": 1, "email": "dev@orion.local", "role": "executive"}


def require_role(module: str):
    def validator(credentials: HTTPAuthorizationCredentials | None = Depends(security), db: Session = Depends(get_db)):
        if settings.is_development:
            return dev_user()
        if not credentials:
            raise HTTPException(status_code=401, detail="Auth required")
        token = credentials.credentials
        session = db.query(SessionToken).filter(SessionToken.token == token, SessionToken.revoked.is_(False)).first()
        if not session:
            raise HTTPException(status_code=401, detail="Invalid session")
        user = db.query(User).filter(User.id == session.user_id).first()
        if not user or not can_access(user.role, module):
            raise HTTPException(status_code=403, detail="Forbidden")
        return {"id": user.id, "email": user.email, "role": user.role}
    return validator


@router.get("/health")
def health():
    return {"status": "ok", "time": datetime.utcnow().isoformat()}


@router.post("/auth/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or password != "password":
        raise HTTPException(status_code=401, detail="Bad credentials")
    token = create_access_token(str(user.id), user.role)
    db.add(SessionToken(user_id=user.id, token=token))
    db.add(AuditLog(user_id=user.id, action="login", module="auth", details="Successful login"))
    db.commit()
    return {"access_token": token, "token_type": "bearer", "role": user.role}


@router.get("/auth/me")
def auth_me(user=Depends(require_role("dashboard"))):
    return user


@router.get("/kpis")
def kpis(user=Depends(require_role("dashboard")), db: Session = Depends(get_db)):
    return {
        "pending_tasks": db.query(WorkflowTask).filter(WorkflowTask.status != "done").count(),
        "active_leads": db.query(LeadPipeline).count(),
        "notifications": db.query(Notification).count(),
        "seo_items": db.query(SeoExecutionWorkflow).count(),
    }


@router.get("/tasks")
def tasks(user=Depends(require_role("tasks")), db: Session = Depends(get_db)):
    return db.query(WorkflowTask).all()


@router.post("/tasks/{task_id}/status")
def update_task_status(task_id: int, status: str, db: Session = Depends(get_db), user=Depends(require_role("tasks"))):
    task = db.query(WorkflowTask).filter(WorkflowTask.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    task.status = status
    db.add(ActivityEvent(event_type="task.status", summary=f"Task {task.title} -> {status}"))
    db.commit()
    return {"ok": True}


@router.get("/leads")
def leads(user=Depends(require_role("leads")), db: Session = Depends(get_db)):
    return db.query(LeadPipeline).all()


@router.get("/content-ops")
def content_ops(user=Depends(require_role("content-ops")), db: Session = Depends(get_db)):
    return db.query(ContentWorkflow).all()


@router.get("/seo-metrics")
def seo_metrics(user=Depends(require_role("seo-growth")), db: Session = Depends(get_db)):
    return db.query(SeoExecutionWorkflow).all()


@router.get("/notifications")
def notifications(user=Depends(require_role("notifications")), db: Session = Depends(get_db)):
    return db.query(Notification).order_by(Notification.id.desc()).all()


@router.get("/timeline")
def timeline(user=Depends(require_role("dashboard")), db: Session = Depends(get_db)):
    return db.query(ActivityEvent).order_by(ActivityEvent.id.desc()).all()


@router.get("/executive/overview")
def executive_overview(user=Depends(require_role("executive")), db: Session = Depends(get_db)):
    return db.query(ExecutiveMetric).order_by(ExecutiveMetric.id.desc()).first()
