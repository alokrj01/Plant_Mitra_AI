from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from dependencies.auth import get_current_user, get_refresh_token_record
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from services.password_reset_service import (
    create_password_reset_request,
)

from config.security import (
  create_access_token,
  create_refresh_token,
  hash_password,
  hash_token_identifier,
  verify_password,
  verify_google_token,
)

from database import get_db
from models import PasswordResetToken, RefreshToken, User
from schemas.auth import (
  RegisterRequest,
  TokenResponse,
  UserResponse,
  RefreshTokenRequest,
  GoogleAuthRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
)


router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Authentication"],
)

@router.get(
    "/me",
    response_model=UserResponse,
)
def get_me(
    current_user: User = Depends(get_current_user),
):
    return current_user


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(
    data: RegisterRequest,
    db: Session = Depends(get_db),
):
    email = data.email.lower().strip()

    existing_user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A user with this email already exists.",
        )

    user = User(
        email=email,
        password_hash=hash_password(data.password),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    email = form_data.username.lower().strip()

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not verify_password(
        form_data.password,
        user.password_hash,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive.",
        )

    access_token = create_access_token(
        str(user.id)
    )

    refresh_token, jti, expires_at = create_refresh_token(
        str(user.id)
    )

    refresh_token_record = RefreshToken(
        user_id=user.id,
        token_hash=hash_token_identifier(jti),
        expires_at=expires_at,
    )

    try:
       db.add(refresh_token_record)
       db.commit()
    except Exception:
       db.rollback()
       raise

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
    )

@router.post(
    "/google",
    response_model=TokenResponse,
)
def google_login(
    data: GoogleAuthRequest,
    db: Session = Depends(get_db),
):
    try:
        google_data = verify_google_token(data.id_token)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Google authentication.",
        )

    google_id = google_data.get("sub")
    email = google_data.get("email")
    email_verified = google_data.get("email_verified", False)

    if not google_id or not email:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Google account information.",
        )

    if not email_verified:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Google email is not verified.",
        )

    email = email.lower().strip()

    user = (
        db.query(User)
        .filter(User.google_id == google_id)
        .first()
    )

    if not user:
        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    if not user:
        user = User(
            email=email,
            password_hash=None,
            google_id=google_id,
            is_verified=True,
        )

        db.add(user)
        db.commit()
        db.refresh(user)

    elif not user.google_id:
        user.google_id = google_id
        user.is_verified = True

        db.commit()
        db.refresh(user)

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive.",
        )

    access_token = create_access_token(
        str(user.id)
    )

    refresh_token, jti, expires_at = create_refresh_token(
        str(user.id)
    )

    refresh_token_record = RefreshToken(
        user_id=user.id,
        token_hash=hash_token_identifier(jti),
        expires_at=expires_at,
    )

    try:
        db.add(refresh_token_record)
        db.commit()
    except Exception:
        db.rollback()
        raise

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
    )

@router.post(
    "/refresh",
    response_model=TokenResponse,
)
def refresh_token(
    data: RefreshTokenRequest,
    db: Session = Depends(get_db),
):
    _, old_refresh_record, user = get_refresh_token_record(
        data.refresh_token,
        db,
    )

    now = datetime.now(timezone.utc)

    new_access_token = create_access_token(
        str(user.id)
    )

    new_refresh_token, new_jti, new_expires_at = (
        create_refresh_token(str(user.id))
    )

    old_refresh_record.revoked_at = now

    new_refresh_record = RefreshToken(
        user_id=user.id,
        token_hash=hash_token_identifier(new_jti),
        expires_at=new_expires_at,
    )

    try:
        db.add(new_refresh_record)
        db.commit()
    except Exception:
        db.rollback()
        raise

    return TokenResponse(
        access_token=new_access_token,
        refresh_token=new_refresh_token,
    )


@router.post(
    "/logout",
    status_code=status.HTTP_204_NO_CONTENT,
)
def logout(
    data: RefreshTokenRequest,
    db: Session = Depends(get_db),
):
    _, refresh_record, _ = get_refresh_token_record(
        data.refresh_token,
        db,
    )

    refresh_record.revoked_at = datetime.now(timezone.utc)

    try:
        db.commit()
    except Exception:
        db.rollback()
        raise


@router.post("/forgot-password")
def forgot_password(
    data: ForgotPasswordRequest,
    db: Session = Depends(get_db),
):
    token = create_password_reset_request(
        data.email,
        db,
    )

    return {
        "message": (
            "If an account with that email exists, "
            "a password reset link will be sent."
        )
    }

@router.post("/reset-password")
def reset_password(
    data: ResetPasswordRequest,
    db: Session = Depends(get_db),
):
    token_hash = hash_token_identifier(data.token)

    reset_token = (
        db.query(PasswordResetToken)
        .filter(
            PasswordResetToken.token_hash == token_hash
        )
        .first()
    )

    if not reset_token:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired password reset token.",
        )

    now = datetime.now(timezone.utc)

    if reset_token.used_at is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired password reset token.",
        )

    if reset_token.expires_at <= now:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired password reset token.",
        )

    user = reset_token.user

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive.",
        )

    user.password_hash = hash_password(
        data.new_password
    )

    reset_token.used_at = now

    try:
        db.commit()
    except Exception:
        db.rollback()
        raise

    return {
        "message": "Password has been reset successfully."
    }