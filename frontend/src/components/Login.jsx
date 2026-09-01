import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Label } from "./ui/label.jsx";
import GoogleSignInButton from "./auth/GoogleSignInButton.jsx";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, googleLogin } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      toast({
        title: "Missing Information",
        description:
          "Please enter your email address and password.",
        variant: "destructive",
      });

      return;
    }

    setIsLoading(true);

    try {
      await login({
        email: email.trim(),
        password,
      });

      toast({
        title: "Login Successful",
        description: "Welcome back to PlantMitra AI.",
      });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast({
        title: "Login Failed",
        description: getApiErrorMessage(error),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card className="border-0 bg-transparent shadow-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
        <CardHeader className="text-center items-center pb-5 sm:pb-6">
          <CardTitle className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>

          <CardDescription className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleLogin}
            className="space-y-4 sm:space-y-5"
          >
            <div>
              <Label
                htmlFor="email"
                className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email Address
              </Label>

              <div className="relative group">
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
                  required
                  autoComplete="email"
                  className="font-sans pl-10"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label
                  htmlFor="password"
                  className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300 mb-0"
                >
                  Password
                </Label>

                <Link
                  to="/forgot-password"
                  className="font-sans text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>

                <Input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                  autoComplete="current-password"
                  className="font-sans pl-10 pr-10 placeholder:font-mono"
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

            <Button
              type="submit"
              className="w-full mt-2 h-11 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6">
           <div className="relative flex items-center">
             <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />

             <span className="mx-4 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
             OR
             </span>

             <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
           </div>

           <GoogleSignInButton
             onSuccess={async (credential) => {
               try {
                  setIsLoading(true);

                  await googleLogin(credential);

                  toast({
                     title: "Login Successful",
                     description: "Welcome to PlantMitra AI.",
                  });

                  navigate("/dashboard", { replace: true });
               } catch (error) {
                 toast({
                   title: "Google Login Failed",
                   description: getApiErrorMessage(error),
                   variant: "destructive",
                 });
               } finally {
                 setIsLoading(false);
               }
             }}
           />
          </div>
          <AuthFooter
            text="New to PlantMitra AI?"
            link="/register"
            linkText="Create an account"
          />
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Login;