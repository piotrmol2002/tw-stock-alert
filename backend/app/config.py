from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:password@db:5432/inventory"
    SECRET_KEY: str = "changeme"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    CELERY_BROKER_URL: str = "redis://redis:6379/0"

    class Config:
        env_file = ".env"

settings = Settings()
