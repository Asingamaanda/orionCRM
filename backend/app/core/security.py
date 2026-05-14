from datetime import datetime, timedelta, timezone
from jose import jwt
from app.core.config import settings


def create_access_token(subject: str, role: str) -> str:
    expires = datetime.now(timezone.utc) + timedelta(minutes=settings.access_token_minutes)
    payload = {"sub": subject, "role": role, "exp": expires}
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)
