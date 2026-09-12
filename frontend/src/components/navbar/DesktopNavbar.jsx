import { Link, NavLink } from "react-router-dom";
import { User, LogOut, ArrowUpRight } from "lucide-react";

import ThemeToggle from "../ThemeToggle";
import { navItems } from "./navItems.js";

const DesktopNavbar = ({
  user,
  isAuthenticated,
  handleLogout,
  handleNavClick,
}) => {
  return (
    <div className="hidden min-w-0 flex-1 items-center gap-4 md:flex">
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
      <div className="flex items-center gap-1.5 lg:gap-2">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
              rounded-full
              px-3
              py-1.5
              text-xs
              font-semibold
              transition-all
              duration-200
              lg:px-3.5
              lg:text-sm
              ${
                isActive
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                  : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
              }
            `
          }
        >
          Dashboard
        </NavLink>

        {isAuthenticated ? (
          <>
            {/* History */}
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-200
                  lg:px-3.5
                  lg:text-sm
                  ${
                    isActive
                      ? "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400"
                      : "text-slate-700 hover:bg-red-50 hover:text-red-700 dark:text-slate-300 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                  }
                `
              }
            >
              History
            </NavLink>

            {/* User Profile */}
            <div className="group relative">
              <button
                type="button"
                aria-label={`Signed in as ${user?.email || "User"}`}
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
    </div>
  );
};

export default DesktopNavbar;