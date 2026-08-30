"""add prediction feedback

Revision ID: 42aa3f52173b
Revises: 70fc6350666b
Create Date: 2026-08-29 21:58:28.945818

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '42aa3f52173b'
down_revision: Union[str, Sequence[str], None] = '70fc6350666b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "prediction_feedback",

        sa.Column(
            "id",
            sa.Integer(),
            primary_key=True,
            nullable=False,
        ),

        sa.Column(
            "prediction_id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "user_id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "feedback",
            sa.String(length=20),
            nullable=False,
        ),

        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
        ),

        sa.ForeignKeyConstraint(
            ["prediction_id"],
            ["predictions.id"],
            ondelete="CASCADE",
        ),

        sa.ForeignKeyConstraint(
            ["user_id"],
            ["users.id"],
            ondelete="CASCADE",
        ),

        sa.UniqueConstraint(
            "prediction_id",
            "user_id",
            name="uq_prediction_feedback_prediction_user",
        ),
    )

    op.create_index(
        "ix_prediction_feedback_id",
        "prediction_feedback",
        ["id"],
        unique=False,
    )

    op.create_index(
        "ix_prediction_feedback_prediction_id",
        "prediction_feedback",
        ["prediction_id"],
        unique=False,
    )

    op.create_index(
        "ix_prediction_feedback_user_id",
        "prediction_feedback",
        ["user_id"],
        unique=False,
    )


def downgrade() -> None:
    op.drop_index(
        "ix_prediction_feedback_user_id",
        table_name="prediction_feedback",
    )

    op.drop_index(
        "ix_prediction_feedback_prediction_id",
        table_name="prediction_feedback",
    )

    op.drop_index(
        "ix_prediction_feedback_id",
        table_name="prediction_feedback",
    )

    op.drop_table("prediction_feedback")
