import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, LogOut, Menu, X } from "lucide-react";

import ThemeToggle from "../ThemeToggle";
import { navItems } from "./navItems.js";

const MobileNavbar = ({
  isAuthenticated,
  mobileOpen,
  setMobileOpen,
  handleLogout,
  handleNavClick,
}) => {
  return (
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            mt-2
            rounded-[2rem]
            border
            border-slate-200/70
            bg-white/95
            px-3
            py-3
            shadow-lg
            shadow-slate-900/5
            backdrop-blur-xl
            dark:border-slate-800/80
            dark:bg-slate-950/95
            dark:shadow-black/20
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

            {/* Dashboard */}
            <NavLink
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                  mt-1
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
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

            {/* Guest CTA */}
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

            {/* Logged-in Actions */}
            {isAuthenticated && (
              <>
                {/* History */}
                <NavLink
                  to="/history"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `
                      mt-1
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
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
  );
};

export default MobileNavbar;