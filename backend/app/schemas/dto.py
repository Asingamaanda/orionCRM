from datetime import date, datetime
from pydantic import BaseModel


class TaskOut(BaseModel):
    id: int
    title: str
    priority: str
    status: str
    assigned_to: str
    due_date: date

    class Config:
        from_attributes = True


class LeadOut(BaseModel):
    id: int
    client_name: str
    source: str
    lead_stage: str
    conversion_probability: float
    last_contacted: date

    class Config:
        from_attributes = True


class NoteOut(BaseModel):
    id: int
    content: str
    category: str
    created_at: datetime

    class Config:
        from_attributes = True
