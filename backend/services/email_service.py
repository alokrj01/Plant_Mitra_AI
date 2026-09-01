import resend

from config.settings import get_settings


def send_password_reset_email(
    recipient_email: str,
    reset_token: str,
) -> None:
    settings = get_settings()

    reset_url = f"{settings.FRONTEND_URL}/reset-password?token={reset_token}"

    resend.api_key = settings.RESEND_API_KEY

    resend.Emails.send(
        {
            "from": settings.EMAIL_FROM,
            "to": [recipient_email],
            "subject": "Reset your PlantMitra AI password",
            "html": f"""
                <h2>Password Reset</h2>

                <p>
                    We received a request to reset your
                    PlantMitra AI password.
                </p>

                <p>
                    Click the button below to create a new password:
                </p>

                <p>
                    <a
                        href="{reset_url}"
                        style="
                            display:inline-block;
                            padding:12px 20px;
                            background:#16a34a;
                            color:white;
                            text-decoration:none;
                            border-radius:8px;
                        "
                    >
                        Reset Password
                    </a>
                </p>

                <p>
                        This password reset link will expire in
                        {settings.PASSWORD_RESET_TOKEN_EXPIRE_MINUTES}
                        minutes.
                    </p>

                    <p>
                        If you didn't request a password reset,
                        you can safely ignore this email.
                    </p>

                    <p style="
                        margin-top: 32px;
                        color: #64748b;
                        font-size: 13px;
                    ">
                        PlantMitra AI
                    </p>
                </div>
            """,
        }
    )
