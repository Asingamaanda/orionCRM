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
    priority = Column(String, default="Medium")
    status = Column(String, default="todo")
    recurring_rule = Column(String, nullable=True)
    due_at = Column(String, nullable=True)
    template_name = Column(String, nullable=True)


class LeadPipeline(Base):
    __tablename__ = "lead_pipeline"
    id = Column(Integer, primary_key=True)
    client_name = Column(String, nullable=False)
    stage = Column(String, nullable=False)
    conversion_score = Column(Float, nullable=False)
    source = Column(String, nullable=False)
    interaction_history = Column(Text, nullable=False)


class ContentWorkflow(Base):
    __tablename__ = "content_workflows"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    platform = Column(String, nullable=False)
    campaign = Column(String, nullable=False)
    publishing_status = Column(String, nullable=False)
    performance = Column(Float, nullable=False)


class SeoExecutionWorkflow(Base):
    __tablename__ = "seo_execution_workflows"
    id = Column(Integer, primary_key=True)
    seo_task = Column(String, nullable=False)
    verification_status = Column(String, nullable=False)
    schema_status = Column(String, nullable=False)
    metadata_audit = Column(String, nullable=False)
    optimization_score = Column(Float, nullable=False)
    engineering_status = Column(String, nullable=False)


class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class ActivityEvent(Base):
    __tablename__ = "activity_events"
    id = Column(Integer, primary_key=True)
    event_type = Column(String, nullable=False)
    summary = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class ExecutiveMetric(Base):
    __tablename__ = "executive_metrics"
    id = Column(Integer, primary_key=True)
    operational_health_score = Column(Float, nullable=False)
    lead_conversion = Column(Float, nullable=False)
    seo_visibility_trend = Column(Float, nullable=False)
    campaign_performance = Column(Float, nullable=False)
    engineering_velocity = Column(Float, nullable=False)
    staff_workload = Column(Float, nullable=False)
    ai_summary = Column(Text, nullable=False)
