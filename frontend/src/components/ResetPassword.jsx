import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Loader2,
} from "lucide-react";

import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Label } from "./ui/label.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card.jsx";

import AuthLayout from "./auth/AuthLayout.jsx";
import { useToast } from "../hooks/use-toast";
import { resetPassword } from "../features/auth/api/authApi.js";
import { getApiErrorMessage } from "../lib/apiError.js";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      toast({
        title: "Invalid Reset Link",
        description: "This password reset link is invalid.",
        variant: "destructive",
      });

      return;
    }

    if (!password || !confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in both password fields.",
        variant: "destructive",
      });

      return;
    }

    if (password.length < 8) {
      toast({
        title: "Weak Password",
        description:
          "Password must be at least 8 characters long.",
        variant: "destructive",
      });

      return;
    }

    if (password.length > 128) {
      toast({
        title: "Invalid Password",
        description:
          "Password must not exceed 128 characters.",
        variant: "destructive",
      });

      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });

      return;
    }

    setIsLoading(true);

    try {
      await resetPassword({
        token,
        newPassword: password,
      });

      setIsSuccess(true);
    } catch (error) {
      toast({
        title: "Password Reset Failed",
        description: getApiErrorMessage(error),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card
        className="
          border-0
          bg-transparent
          shadow-none
          animate-in
          fade-in
          slide-in-from-bottom-8
          duration-700
        "
      >
        <CardHeader className="text-center items-center pb-5 sm:pb-6">
          <CardTitle className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Reset Password
          </CardTitle>

          <CardDescription className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Create a new password for your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {isSuccess ? (
            <div className="text-center space-y-5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/40">
                <Lock className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  Password updated
                </h2>

                <p className="font-sans text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Your password has been changed successfully.
                  You can now sign in with your new password.
                </p>
              </div>

              <Button
                type="button"
                className="w-full h-11 font-semibold"
                onClick={() => navigate("/login", { replace: true })}
              >
                Back to Sign In
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <Label
                  htmlFor="password"
                  className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  New Password
                </Label>

                <div className="relative group mt-1.5">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a new password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    autoComplete="new-password"
                    required
                    className="font-sans pl-10 pr-10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current,
                      )
                    }
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Confirm New Password
                </Label>

                <div className="relative group mt-1.5">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>

                  <Input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    autoComplete="new-password"
                    required
                    className="font-sans pl-10 pr-10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current,
                      )
                    }
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Updating Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 font-sans text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </form>
          )}
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default ResetPassword;