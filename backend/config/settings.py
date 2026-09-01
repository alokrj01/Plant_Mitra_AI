from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
  DATABASE_URL: str
  
  JWT_SECRET_KEY: str
  JWT_ALGORITHM: str = "HS256"
  ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
  REFRESH_TOKEN_EXPIRE_DAYS: int = 7

  GOOGLE_CLIENT_ID: str

  RESEND_API_KEY: str
  EMAIL_FROM: str
  FRONTEND_URL: str

  PASSWORD_RESET_TOKEN_EXPIRE_MINUTES: int = 30

  model_config = SettingsConfigDict(
    env_file=".env",
    env_file_encoding="utf-8",
    case_sensitive=True,
    extra="ignore",
  )

@lru_cache
def get_settings() -> Settings:
  return Settings()