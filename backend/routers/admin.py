from fastapi import APIRouter, Depends

from dependencies.auth import require_admin
from models import User


router = APIRouter(
    prefix="/api/v1/admin",
    tags=["Admin"],
)


@router.get("/test")
def admin_test(
    current_admin: User = Depends(require_admin),
):
    return {
        "message": "Admin access granted.",
        "user_id": current_admin.id,
        "role": current_admin.role,
    }