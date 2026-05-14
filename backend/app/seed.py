from app.database import SessionLocal
from app.models.entities import *


def run_seed() -> None:
    db = SessionLocal()
    for model in [User, SessionToken, AuditLog, WorkflowTask, WhatsappWorkflow, ContentWorkflow, SeoExecutionWorkflow, SystemHealth, ExecutiveMetric]:
        db.query(model).delete()

    db.add(User(email="admin@orion.law", password_hash="password", role="Admin", is_active=True))
    db.add(User(email="exec@orion.law", password_hash="password", role="Executive", is_active=True))
    db.add(WorkflowTask(title="Weekly intake review", template_name="intake_template", recurring_rule="weekly", approval_status="approved", escalation_rule="notify_ops_manager", dependency_task_id=None, status="todo"))
    db.add(WhatsappWorkflow(lead_name="Dana Smith", assigned_to="Alex", followup_stage="Initial Contact", consultation_slot="2026-05-22 10:00", response_status="awaiting_client"))
    db.add(ContentWorkflow(title="Startup compliance post", approval_stage="legal_review", publishing_status="scheduled", campaign_owner="Mia", scheduled_publish_at="2026-05-23 09:00", media_asset_status="approved"))
    db.add(SeoExecutionWorkflow(seo_task="Fix duplicate metadata", assigned_to="Priya", verification_status="pending", issue_lifecycle="in_progress", engineering_deployment_status="staging"))
    db.add(SystemHealth(api_status="healthy", failed_tasks=1, notification_delivery_failures=0, background_jobs_running=3))
    db.add(ExecutiveMetric(operational_health_score=91.4, campaign_performance=18.2, lead_conversion=24.8, engineering_velocity=32.0, seo_visibility_trend=12.6, staff_workload=74.0))

    db.commit()
    db.close()


if __name__ == "__main__":
    run_seed()
