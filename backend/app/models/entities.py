from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.sql import func
from app.database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)


class SessionToken(Base):
    __tablename__ = "session_tokens"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    token = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    revoked = Column(Boolean, default=False)


class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, nullable=True)
    action = Column(String, nullable=False)
    module = Column(String, nullable=False)
    details = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class WorkflowTask(Base):
    __tablename__ = "workflow_tasks"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    template_name = Column(String, nullable=True)
    recurring_rule = Column(String, nullable=True)
    approval_status = Column(String, default="pending")
    escalation_rule = Column(String, nullable=True)
    dependency_task_id = Column(Integer, nullable=True)
    status = Column(String, default="todo")


class WhatsappWorkflow(Base):
    __tablename__ = "whatsapp_workflows"
    id = Column(Integer, primary_key=True)
    lead_name = Column(String, nullable=False)
    assigned_to = Column(String, nullable=False)
    followup_stage = Column(String, nullable=False)
    consultation_slot = Column(String, nullable=True)
    response_status = Column(String, nullable=False)


class ContentWorkflow(Base):
    __tablename__ = "content_workflows"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    approval_stage = Column(String, nullable=False)
    publishing_status = Column(String, nullable=False)
    campaign_owner = Column(String, nullable=False)
    scheduled_publish_at = Column(String, nullable=True)
    media_asset_status = Column(String, nullable=False)


class SeoExecutionWorkflow(Base):
    __tablename__ = "seo_execution_workflows"
    id = Column(Integer, primary_key=True)
    seo_task = Column(String, nullable=False)
    assigned_to = Column(String, nullable=False)
    verification_status = Column(String, nullable=False)
    issue_lifecycle = Column(String, nullable=False)
    engineering_deployment_status = Column(String, nullable=False)


class SystemHealth(Base):
    __tablename__ = "system_health"
    id = Column(Integer, primary_key=True)
    api_status = Column(String, nullable=False)
    failed_tasks = Column(Integer, default=0)
    notification_delivery_failures = Column(Integer, default=0)
    background_jobs_running = Column(Integer, default=0)
    checked_at = Column(DateTime(timezone=True), server_default=func.now())


class ExecutiveMetric(Base):
    __tablename__ = "executive_metrics"
    id = Column(Integer, primary_key=True)
    operational_health_score = Column(Float, nullable=False)
    campaign_performance = Column(Float, nullable=False)
    lead_conversion = Column(Float, nullable=False)
    engineering_velocity = Column(Float, nullable=False)
    seo_visibility_trend = Column(Float, nullable=False)
    staff_workload = Column(Float, nullable=False)
