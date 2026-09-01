import { useEffect } from "react";
import { env } from "../../config/env.js";

const GoogleSignInButton = ({ onSuccess }) => {
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (!window.google) {
        return false;
      }

      const button = document.getElementById(
        "google-signin-button",
      );

      if (!button) {
        return false;
      }

      button.innerHTML = "";

      window.google.accounts.id.initialize({
        client_id: env.googleClientId,

        callback: (response) => {
          onSuccess(response.credential);
        },
      });

      window.google.accounts.id.renderButton(
        button,
        {
          theme: "outline",
          size: "large",
          width: 320,
          text: "continue_with",
        },
      );

      return true;
    };

    if (initializeGoogleSignIn()) {
      return;
    }

    const interval = setInterval(() => {
      if (initializeGoogleSignIn()) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onSuccess]);

  return (
    <div
      id="google-signin-button"
      className="mt-5 flex justify-center"
    />
  );
};

export default GoogleSignInButton;