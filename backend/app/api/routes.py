from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session
from app.core.rbac import can_access
from app.core.security import create_access_token
from app.database import SessionLocal
from app.models.entities import AuditLog, ExecutiveMetric, SessionToken, SystemHealth, User

router = APIRouter(prefix="/api")
security = HTTPBearer()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def require_role(module: str):
    def validator(credentials: HTTPAuthorizationCredentials = Depends(security), db: Session = Depends(get_db)):
        token = credentials.credentials
        session = db.query(SessionToken).filter(SessionToken.token == token, SessionToken.revoked.is_(False)).first()
        if not session:
            raise HTTPException(status_code=401, detail="Invalid session")
        user = db.query(User).filter(User.id == session.user_id).first()
        if not user or not can_access(user.role, module):
            raise HTTPException(status_code=403, detail="Forbidden")
        return user
    return validator


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


@router.get("/executive/overview")
def executive_overview(user=Depends(require_role("executive")), db: Session = Depends(get_db)):
    metric = db.query(ExecutiveMetric).order_by(ExecutiveMetric.id.desc()).first()
    return metric


@router.get("/system/health")
def system_health(user=Depends(require_role("dashboard")), db: Session = Depends(get_db)):
    return db.query(SystemHealth).order_by(SystemHealth.id.desc()).first()


@router.get("/auth/me")
def auth_me(user=Depends(require_role("dashboard"))):
    return {"id": user.id, "email": user.email, "role": user.role}
