from app.database import SessionLocal
from app.models.entities import ActivityEvent, ContentWorkflow, ExecutiveMetric, LeadPipeline, Notification, SeoExecutionWorkflow, User, WorkflowTask


def run_seed() -> None:
    db = SessionLocal()
    for model in [User, WorkflowTask, LeadPipeline, ContentWorkflow, SeoExecutionWorkflow, Notification, ActivityEvent, ExecutiveMetric]:
        db.query(model).delete()

    db.add(User(email="admin@orion.law", password_hash="password", role="Admin", is_active=True))
    db.add_all([
        WorkflowTask(title="Review intake forms", priority="High", status="in_progress", recurring_rule="weekly", due_at="2026-05-19", template_name="Intake QA"),
        WorkflowTask(title="Publish compliance article", priority="Medium", status="todo", recurring_rule="monthly", due_at="2026-05-25", template_name="Content Publish"),
    ])
    db.add_all([
        LeadPipeline(client_name="Acme Legal", stage="Consultation Booked", conversion_score=78, source="WhatsApp", interaction_history="WhatsApp>Call"),
        LeadPipeline(client_name="Bluewave", stage="Proposal Sent", conversion_score=66, source="LinkedIn", interaction_history="LinkedIn>Meeting"),
    ])
    db.add_all([
        ContentWorkflow(title="Founder Liability Reel", platform="Instagram", campaign="Startup Q2", publishing_status="Scheduled", performance=71),
        ContentWorkflow(title="Labor Law FAQ", platform="YouTube", campaign="SME HR", publishing_status="Published", performance=84),
    ])
    db.add(SeoExecutionWorkflow(seo_task="Schema fix on service pages", verification_status="Pending", schema_status="Partial", metadata_audit="5 missing descriptions", optimization_score=82, engineering_status="Staging"))
    db.add_all([
        Notification(title="Overdue task alert", message="Finalize retainer template overdue."),
        Notification(title="Lead follow-up", message="WhatsApp lead needs callback."),
    ])
    db.add_all([
        ActivityEvent(event_type="task", summary="Task moved to in_progress"),
        ActivityEvent(event_type="lead", summary="Lead moved to Consultation Booked"),
        ActivityEvent(event_type="seo", summary="Metadata audit executed"),
    ])
    db.add(ExecutiveMetric(operational_health_score=91.2, lead_conversion=24.6, seo_visibility_trend=12.2, campaign_performance=18.4, engineering_velocity=31.0, staff_workload=73.0, ai_summary="Operations stable, SEO trend positive, follow-up speed can improve."))

    db.commit()
    db.close()


if __name__ == "__main__":
    run_seed()
