import logging
from datetime import datetime, timedelta, timezone

from sqlalchemy.orm import Session

from config.security import (
    create_password_reset_token,
    hash_password,
    hash_token_identifier,
)
from config.settings import get_settings
from models import PasswordResetToken, User
from services.email_service import send_password_reset_email


logger = logging.getLogger(__name__)


def create_password_reset_request(
    email: str,
    db: Session,
) -> None:
    """
    Create a password reset request for an existing user.

    Returns nothing so the caller cannot accidentally expose
    whether the email exists.
    """

    settings = get_settings()

    user = (
        db.query(User)
        .filter(
            User.email == email.lower().strip()
        )
        .first()
    )

    if not user:
        return

    now = datetime.now(timezone.utc)

    # Invalidate previous unused reset tokens.
    (
        db.query(PasswordResetToken)
        .filter(
            PasswordResetToken.user_id == user.id,
            PasswordResetToken.used_at.is_(None),
            PasswordResetToken.expires_at > now,
        )
        .update(
            {
                PasswordResetToken.used_at: now,
            },
            synchronize_session=False,
        )
    )

    raw_token = create_password_reset_token()

    token_hash = hash_token_identifier(raw_token)

    expires_at = now + timedelta(
        minutes=settings.PASSWORD_RESET_TOKEN_EXPIRE_MINUTES
    )

    reset_token = PasswordResetToken(
        user_id=user.id,
        token_hash=token_hash,
        expires_at=expires_at,
    )

    try:
        db.add(reset_token)
        db.commit()
    except Exception:
        db.rollback()
        raise

    try:
        send_password_reset_email(
            user.email,
            raw_token,
        )
    except Exception:
        logger.exception(
            "Failed to send password reset email"
        )