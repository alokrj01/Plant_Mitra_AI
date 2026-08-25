import { Link, useNavigate } from "react-router-dom";
import { Leaf, LogOut, User, LogIn, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../features/auth/useAuth.js";
import { getApiErrorMessage } from "../lib/apiError.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      toast({
        title: "Logged Out",
        description:
          "You have been successfully logged out.",
      });

      navigate("/login", { replace: true });
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: getApiErrorMessage(error),
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full pt-2 sm:pt-4 px-2 sm:px-4 pb-2">
      <div
        className="
          mx-auto
          max-w-5xl
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          border
          border-white/50
          dark:border-slate-700
          shadow-[0_8px_30px_rgb(0,0,0,0.06)]
          dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)]
          rounded-2xl
          px-3
          py-2
          sm:px-5
          sm:py-3
          flex
          items-center
          justify-between
          gap-2
          transition-all
          duration-300
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            items-center
            space-x-2
            sm:space-x-3
            group
            cursor-pointer
            flex-shrink-0
            rounded-xl
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-green-500
            focus-visible:ring-offset-2
            dark:focus-visible:ring-offset-slate-900
          "
        >
          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-8
              h-8
              sm:w-11
              sm:h-11
              rounded-full
              bg-gradient-to-br
              from-green-500
              to-emerald-600
              shadow-md
              shadow-emerald-500/30
              border-2
              border-white/80
              group-hover:shadow-lg
              group-hover:shadow-emerald-500/40
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:scale-105
            "
          >
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-white relative z-10" />

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-white/20
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            />
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <span
              className="
                font-display
                text-base
                sm:text-xl
                font-extrabold
                text-gray-900
                dark:text-white
                tracking-tight
                leading-none
                mb-0.5
                group-hover:text-green-700
                dark:group-hover:text-green-400
                transition-colors
                duration-300
                whitespace-nowrap
              "
            >
              PlantMitra AI
            </span>

            <span
              className="
                font-display
                hidden
                md:block
                text-[10px]
                font-bold
                text-green-600
                dark:text-green-400
                uppercase
                tracking-wider
                whitespace-nowrap
              "
            >
              Advanced Plant Disease Detection
            </span>
          </div>
        </Link>

        {/* User / Action Section */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {isAuthenticated ? (
            <>
              {/* User Profile */}
              <div className="relative group">
                <button
                  type="button"
                  aria-label={`Signed in as ${
                    user?.email || "User"
                  }`}
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-xl
                    bg-gray-50/80
                    dark:bg-slate-800
                    border
                    border-gray-200
                    dark:border-slate-700
                    text-green-600
                    dark:text-green-400
                    hover:bg-green-50
                    dark:hover:bg-green-950/30
                    hover:border-green-200
                    dark:hover:border-green-800
                    transition-all
                    duration-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-green-500
                    focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-slate-900
                  "
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                {/* Email Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-full
                    mt-2
                    z-[60]
                    whitespace-nowrap
                    rounded-lg
                    bg-slate-900
                    dark:bg-white
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    dark:text-slate-900
                    shadow-lg
                    opacity-0
                    translate-y-1
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-focus-within:opacity-100
                    group-focus-within:translate-y-0
                  "
                >
                  {user?.email || "User"}
                </div>
              </div>

              {/* Logout */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={handleLogout}
                  aria-label="Log out"
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-xl
                    text-gray-600
                    dark:text-gray-300
                    hover:bg-red-50
                    dark:hover:bg-red-950/40
                    hover:text-red-600
                    dark:hover:text-red-400
                    transition-all
                    duration-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-red-500
                    focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-slate-900
                  "
                >
                  <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                {/* Logout Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-full
                    mt-2
                    z-[60]
                    whitespace-nowrap
                    rounded-lg
                    bg-slate-900
                    dark:bg-white
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    dark:text-slate-900
                    shadow-lg
                    opacity-0
                    translate-y-1
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-focus-within:opacity-100
                    group-focus-within:translate-y-0
                  "
                >
                  Logout
                </div>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </>
          ) : (
            <>
              {/* Sign In */}
              <div className="relative group">
                <Link
                  to="/login"
                  aria-label="Sign in"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    h-9
                    w-9
                    sm:h-10
                    sm:w-auto
                    sm:px-4
                    rounded-xl
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-200
                    border
                    border-slate-200
                    dark:border-slate-700
                    bg-white/60
                    dark:bg-slate-800/60
                    hover:bg-green-50
                    dark:hover:bg-green-950/30
                    hover:border-green-200
                    dark:hover:border-green-800
                    hover:text-green-600
                    dark:hover:text-green-400
                    transition-all
                    duration-200
                    whitespace-nowrap
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-green-500
                    focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-slate-900
                  "
                >
                  <LogIn className="h-4 w-4 shrink-0" />

                  <span className="hidden sm:inline">
                    Sign In
                  </span>
                </Link>

                {/* Mobile Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-full
                    mt-2
                    z-[60]
                    whitespace-nowrap
                    rounded-lg
                    bg-slate-900
                    dark:bg-white
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    dark:text-slate-900
                    shadow-lg
                    opacity-0
                    translate-y-1
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-focus-within:opacity-100
                    group-focus-within:translate-y-0
                  "
                >
                  Sign In
                </div>
              </div>

              {/* Get Started */}
              <div className="relative group">
                <Link
                  to="/register"
                  aria-label="Get started"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    h-9
                    w-9
                    sm:h-10
                    sm:w-auto
                    sm:px-4
                    rounded-xl
                    font-display
                    text-xs
                    sm:text-sm
                    font-semibold
                    whitespace-nowrap
                    text-white
                    bg-green-600
                    hover:bg-green-700
                    dark:bg-green-500
                    dark:hover:bg-green-600
                    shadow-sm
                    hover:shadow-md
                    hover:-translate-y-0.5
                    transition-all
                    duration-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-green-500
                    focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-slate-900
                  "
                >
                  <UserPlus className="h-4 w-4 shrink-0" />

                  <span className="hidden sm:inline">
                    Get Started
                  </span>
                </Link>

                {/* Mobile Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-full
                    mt-2
                    z-[60]
                    whitespace-nowrap
                    rounded-lg
                    bg-slate-900
                    dark:bg-white
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    dark:text-slate-900
                    shadow-lg
                    opacity-0
                    translate-y-1
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-focus-within:opacity-100
                    group-focus-within:translate-y-0
                  "
                >
                  Get Started
                </div>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;