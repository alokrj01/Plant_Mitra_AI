import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Loader2,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import AuthLayout from "./auth/AuthLayout.jsx";
import AuthFooter from "./auth/AuthFooter.jsx";
import { useAuth } from "../features/auth/useAuth.js";
import { getApiErrorMessage } from "../lib/apiError.js";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { register } = useAuth();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const email = formData.email.trim();

    if (
      !email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields.",
        variant: "destructive",
      });

      return false;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Weak Password",
        description:
          "Password must be at least 8 characters long.",
        variant: "destructive",
      });

      return false;
    }

    if (formData.password.length > 128) {
      toast({
        title: "Invalid Password",
        description:
          "Password must not exceed 128 characters.",
        variant: "destructive",
      });

      return false;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });

      return false;
    }

    return true;
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await register({
        email: formData.email.trim(),
        password: formData.password,
      });

      toast({
        title: "Registration Successful",
        description:
          "Your account has been created. You can now sign in.",
      });

      navigate("/login", { replace: true });
    } catch (error) {
      const status = error.response?.status;

      if (status === 409) {
        toast({
          title: "Email Already Registered",
          description:
            "An account with this email already exists, Please sign in instead.",
          variant: "destructive",
        });

        return;
      }

      toast({
        title: "Registration Failed",
        description: getApiErrorMessage(error),
        variant: "destructive",
      });
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
        <CardHeader className="text-center items-center">
          <CardTitle className="font-display text-2xl">
            Create Account
          </CardTitle>

          <CardDescription className="font-sans">
            Join PlantMitra AI to protect your plants
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="font-sans font-medium text-slate-700 dark:text-slate-300"
              >
                Email Address
              </Label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="font-sans pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label
                htmlFor="password"
                className="font-sans font-medium text-slate-700 dark:text-slate-300"
              >
                Password
              </Label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>

                <Input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
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
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
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

            {/* Confirm Password */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="font-sans font-medium text-slate-700 dark:text-slate-300"
              >
                Confirm Password
              </Label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>

                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
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
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
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
              className="w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <AuthFooter
            text="Already have an account?"
            link="/login"
            linkText="Sign In"
          />
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Register;
