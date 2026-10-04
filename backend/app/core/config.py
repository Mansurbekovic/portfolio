import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    PROJECT_NAME: str = "Antigravity Innovations API"
    VERSION: str = "1.0.0"
    API_V1_PREFIX: str = "/api/v1"
    ENVIRONMENT: str = "development"

    # Security
    SECRET_KEY: str = "antigravity_super_secret_key_change_in_production_military_grade"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # CORS & Network
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
    ]
    CSP_ENABLED: bool = True
    HSTS_ENABLED: bool = True

    # AI Model Integrations
    GEMINI_API_KEY: str = Field(default="", description="Google Gemini API Key")
    ANTHROPIC_API_KEY: str = Field(default="", description="Anthropic Claude API Key")
    AI_DEFAULT_MODEL: str = "gemini-3.5-pro"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
