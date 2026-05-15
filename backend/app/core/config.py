from pydantic import BaseModel
import os


class Settings(BaseModel):
    app_env: str = os.getenv("APP_ENV", "development")
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./orion_law.db")
    jwt_secret: str = os.getenv("JWT_SECRET", "change-me")
    jwt_algorithm: str = os.getenv("JWT_ALGORITHM", "HS256")
    access_token_minutes: int = int(os.getenv("ACCESS_TOKEN_MINUTES", "60"))
    frontend_api_url: str = os.getenv("FRONTEND_API_URL", "http://localhost:8000/api")

    @property
    def is_development(self) -> bool:
        return self.app_env.lower() == "development"


settings = Settings()
