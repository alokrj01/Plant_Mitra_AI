from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import text
from sqlalchemy.orm import Session

from database import get_db
from dependencies.auth import require_admin
from models import User
from schemas.admin import AdminUserResponse, UserStatusUpdate, UserRoleUpdate


router = APIRouter(
    prefix="/api/v1/admin",
    tags=["Admin"],
)


# @router.get("/test")
# def admin_test(
#     current_admin: User = Depends(require_admin),
# ):
#     return {
#         "message": "Admin access granted.",
#         "user_id": current_admin.id,
#         "role": current_admin.role,
#     }

@router.get(
    "/users",
    response_model=list[AdminUserResponse],
)
def get_users(
    db: Session = Depends(get_db),
    current_admin: User = Depends(require_admin),
):
    return (
        db.query(User)
        .order_by(User.created_at.desc())
        .all()
    )


@router.get(
    "/users/{user_id}",
    response_model=AdminUserResponse,
)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
    current_admin: User = Depends(require_admin),
):
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return user

@router.patch(
    "/users/{user_id}/status",
    response_model=AdminUserResponse,
)
def update_user_status(
    user_id: int,
    data: UserStatusUpdate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(require_admin),
):
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .with_for_update()
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )
    # No change needed
    if user.is_active == data.is_active:
      return user

    # Prevent deactivating the last active admin.
    if user.role == "admin" and not data.is_active:
        db.execute(
            text("SELECT pg_advisory_xact_lock(845272)")
        )

        active_admin_count = (
            db.query(User)
            .filter(
                User.role == "admin",
                User.is_active.is_(True),
            )
            .count()
        )

        if active_admin_count <= 1:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Cannot deactivate the last active admin.",
            ) 

    user.is_active = data.is_active

    db.commit()
    db.refresh(user)

    return user


@router.patch(
    "/users/{user_id}/role",
    response_model=AdminUserResponse,
)
def update_user_role(
    user_id: int,
    data: UserRoleUpdate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(require_admin),
):

     # Serialize role changes across the application.
    db.execute(
        text("SELECT pg_advisory_xact_lock(845271)")
    )

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .with_for_update()
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    # No database change needed
    if user.role == data.role:
      return user

    # Prevent removing the last admin
    if user.role == "admin" and data.role == "user":
        admin_count = (
            db.query(User)
            .filter(User.role == "admin")
            .count()
        )

        if admin_count <= 1:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Cannot remove the last admin.",
            )

    user.role = data.role

    db.commit()
    db.refresh(user)

    return user