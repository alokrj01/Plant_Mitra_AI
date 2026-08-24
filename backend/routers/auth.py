from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from dependencies.auth import get_current_user, get_refresh_token_record
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from config.security import (
  create_access_token,
  create_refresh_token,
  hash_password,
  hash_token_identifier,
  verify_password,
)

from database import get_db
from models import RefreshToken, User
from schemas.auth import RegisterRequest, TokenResponse, UserResponse, RefreshTokenRequest


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