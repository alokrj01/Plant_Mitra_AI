from datetime import datetime, timedelta, timezone

import jwt
from pwdlib import PasswordHash

from config.settings import get_settings

password_hash = PasswordHash.recommended()

def hash_password(password: str) -> str:
  """
  Hash a plain-text password using Argon2.
  """
  return password_hash.hash(password)

def verify_password(
  plain_password:str,
  hashed_password:str,
) -> bool:
  """
  Verify a plain-text password against its stored hash.
  """
  return password_hash.verify(
    plain_password,
    hashed_password,
  )

def create_access_token(subject: str) -> str:
  """
  Create a short-lived JWT access token.

  The subject identifies the authenticated user.
  """
  settings = get_settings()

  expires_at = datetime.now(timezone.utc) + timedelta(
    minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
  )

  payload = {
    "sub": subject,
    "type": "access",
    "exp": expires_at,
  }

  return jwt.encode(
    payload,
    settings.JWT_SECRET_KEY,
    algorithm=settings.JWT_ALGORITHM,
  )

def create_refresh_token(subject: str) -> str:
    """
    Create a longer-lived JWT refresh token.
    """
    settings = get_settings()

    expires_at = datetime.now(timezone.utc) + timedelta(
      days=settings.REFRESH_TOKEN_EXPIRE_DAYS
    )

    payload = {
      "sub": subject,
      "type": "refresh",
      "exp": expires_at,
    }

    return jwt.encode(
      payload,
      settings.JWT_SECRET_KEY,
      algorithm=settings.JWT_ALGORITHM,
    )

def decode_token(token: str) -> dict:
    """
    Decode and validate a JWT.

    Raises jwt.InvalidTokenError when the token is invalid
    or expired.
    """
    settings = get_settings()

    return jwt.decode(
      token,
      settings.JWT_SECRET_KEY,
      algorithms=[settings.JWT_ALGORITHM],
    )