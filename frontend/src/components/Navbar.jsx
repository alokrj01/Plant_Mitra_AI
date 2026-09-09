import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Leaf,
  LogOut,
  User,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { useToast } from "../hooks/use-toast";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../features/auth/useAuth.js";
import { getApiErrorMessage } from "../lib/apiError.js";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
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

  const handleNavClick = (href) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          rounded-[2rem]
          border
          border-slate-200/70
          dark:border-slate-800/80
          bg-white/80
          dark:bg-slate-950/75
          backdrop-blur-xl
          shadow-lg
          shadow-slate-900/5
          dark:shadow-black/20
          transition-all
          duration-300
        "
      >
        {/* Main Navbar Row */}
        <div
          className="
            flex
            min-h-10
            items-center
            justify-between
            gap-2
            px-3
            py-1.5
            sm:min-h-11
            sm:px-4
            sm:py-2
            lg:px-5
          "
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="
              group
              flex
              min-w-0
              shrink-0
              items-center
              gap-2
              rounded-xl
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-green-500
              focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-slate-900
            "
          >
            {/* Logo Icon */}
            <div
              className="
                relative
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/80
                bg-gradient-to-br
                from-green-500
                to-emerald-600
                shadow-md
                shadow-emerald-500/25
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:scale-105
                group-hover:shadow-lg
                group-hover:shadow-emerald-500/35
                sm:h-9
                sm:w-9
              "
            >
              <Leaf className="relative z-10 h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" />

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-white/20
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </div>

            {/* Brand */}
            <span
              className="
                truncate
                font-display
                text-sm
                font-extrabold
                leading-none
                tracking-tight
                text-slate-900
                transition-colors
                duration-300
                group-hover:text-green-700
                dark:text-white
                dark:group-hover:text-green-400
                sm:text-base
                lg:text-lg
              "
            >
              PlantMitra AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-center
              gap-0.5
              md:flex
            "
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="
                  rounded-full
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-600
                  transition-all
                  duration-200
                  hover:bg-slate-100
                  hover:text-slate-900
                  dark:text-slate-400
                  dark:hover:bg-slate-900
                  dark:hover:text-white
                  lg:px-3
                  lg:text-sm
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-1.5 md:flex lg:gap-2">
            {isAuthenticated ? (
              <>
              {/* Dashboard */}
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-200
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  dark:text-slate-300
                  dark:hover:bg-emerald-950/30
                  dark:hover:text-emerald-400
                  lg:px-3.5
                  lg:text-sm"
              >
                  Dashboard
              </Link>

                {/* User Profile */}
                <div className="group relative">
                  <button
                    type="button"
                    aria-label={`Signed in as ${
                      user?.email || "User"
                    }`}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50/80
                      text-green-600
                      transition-all
                      duration-200
                      hover:border-green-200
                      hover:bg-green-50
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-green-400
                      dark:hover:border-green-800
                      dark:hover:bg-green-950/30
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-green-500
                      focus-visible:ring-offset-2
                      dark:focus-visible:ring-offset-slate-900
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <User className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </button>

                  {/* Email Tooltip */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-full
                      mt-2
                      hidden
                      w-max
                      max-w-64
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2
                      text-xs
                      text-slate-700
                      shadow-lg
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:block
                      group-hover:opacity-100
                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-200
                    "
                  >
                    {user?.email || "User"}
                  </div>
                </div>

                {/* Logout */}
                <div className="group relative">
                  <button
                    type="button"
                    onClick={handleLogout}
                    aria-label="Logout"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50/80
                      text-slate-600
                      transition-all
                      duration-200
                      hover:border-red-200
                      hover:bg-red-50
                      hover:text-red-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-400
                      dark:hover:border-red-800
                      dark:hover:bg-red-950/30
                      dark:hover:text-red-400
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-red-500
                      focus-visible:ring-offset-2
                      dark:focus-visible:ring-offset-slate-900
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <LogOut className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </button>

                  {/* Logout Tooltip */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-full
                      mt-2
                      hidden
                      w-max
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2
                      text-xs
                      text-slate-700
                      shadow-lg
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:block
                      group-hover:opacity-100
                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-200
                    "
                  >
                    Logout
                  </div>
                </div>

                <ThemeToggle />
              </>
            ) : (
              <>
                {/* Get Started */}
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Get started"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    rounded-full
                    bg-emerald-600
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-emerald-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-emerald-500
                    hover:shadow-xl
                    hover:shadow-emerald-600/25
                    dark:bg-emerald-500
                    dark:text-slate-950
                    dark:hover:bg-emerald-400
                    lg:px-4
                    lg:py-2
                    lg:text-sm
                  "
                >
                  Get Started

                  <ArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      lg:h-4
                      lg:w-4
                    "
                  />
                </Link>

                <ThemeToggle />
              </>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-slate-50/80
                text-slate-700
                transition-all
                duration-200
                hover:border-green-200
                hover:bg-green-50
                hover:text-green-700
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-slate-200
                dark:hover:border-green-800
                dark:hover:bg-green-950/30
                dark:hover:text-green-400
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-green-500
                focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-slate-900
                sm:h-9
                sm:w-9
              "
            >
              {mobileOpen ? (
                <X className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              ) : (
                <Menu className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="
              border-t
              border-slate-200/70
              px-3
              py-3
              dark:border-slate-800/80
              md:hidden
            "
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="
                    w-full
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    font-medium
                    text-slate-700
                    transition-colors
                    hover:bg-slate-100
                    hover:text-slate-900
                    dark:text-slate-300
                    dark:hover:bg-slate-900
                    dark:hover:text-white
                  "
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTA */}
              {!isAuthenticated && (
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-1
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    bg-emerald-600
                    px-3
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-md
                    shadow-emerald-600/20
                    transition-all
                    duration-200
                    hover:bg-emerald-500
                    dark:bg-emerald-500
                    dark:text-slate-950
                    dark:hover:bg-emerald-400
                  "
                >
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              {/* Mobile Logged-in Actions */}
              {isAuthenticated && (
                <>
                {/* dashboard */}
                <Link
                 to="/dashboard"
                 onClick={() => setMobileOpen(false)}
                 className="
                   mt-1
                   flex
                   w-full
                   items-center
                   justify-center
                   rounded-xl
                   bg-emerald-600
                   px-3
                   py-2.5
                   text-sm
                   font-semibold
                   text-white
                   shadow-md
                   shadow-emerald-600/20
                   transition-all
                   duration-200
                   hover:bg-emerald-500
                   dark:bg-emerald-500
                   dark:text-slate-950
                   dark:hover:bg-emerald-400
                   "
                 >
                  Dashboard
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    mt-1
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    text-red-600
                    transition-colors
                    hover:bg-red-50
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-red-400
                    dark:hover:bg-red-950/30
                  "
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;