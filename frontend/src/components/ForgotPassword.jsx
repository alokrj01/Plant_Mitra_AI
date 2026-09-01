import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  Mail,
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
import { forgotPassword } from "../features/auth/api/authApi.js";
import { getApiErrorMessage } from "../lib/apiError.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive",
      });

      return;
    }

    setIsLoading(true);

    try {
      await forgotPassword(email.trim());

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Request Failed",
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
            Forgot Password?
          </CardTitle>

          <CardDescription className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Enter your email and we'll send you a password reset link.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center space-y-5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/40">
                <Mail className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  Check your email
                </h2>

                <p className="font-sans text-sm leading-6 text-slate-500 dark:text-slate-400">
                  If an account with that email exists, you'll
                  receive a password reset link shortly.
                </p>
              </div>

              <Link
                to="/login"
                className="
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-600
                  font-sans
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-green-700
                  hover:shadow-md
                "
              >
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <Label
                    htmlFor="email"
                    className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </Label>

                  <div className="relative group mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                    </div>

                    <Input
                      id="email"
                      type="email"
                      placeholder="farmer@example.com"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      autoComplete="email"
                      required
                      className="font-sans pl-10"
                    />
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
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>

              <Link
                to="/login"
                className="mt-6 flex items-center justify-center gap-2 font-sans text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;