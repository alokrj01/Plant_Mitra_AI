import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

import { useToast } from "../hooks/use-toast";
import { useAuth } from "../features/auth/useAuth.js";
import { getApiErrorMessage } from "../lib/apiError.js";

import DesktopNavbar from "./navbar/DesktopNavbar.jsx";
import MobileNavbar from "./navbar/MobileNavbar.jsx";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      setMobileOpen(false);

      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });

      navigate("/", { replace: true });
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
          relative
          mx-auto
          w-full
          max-w-5xl
          rounded-[2rem]
          border
          border-slate-200/70
          bg-white/80
          shadow-lg
          shadow-slate-900/5
          backdrop-blur-xl
          transition-all
          duration-300
          dark:border-slate-800/80
          dark:bg-slate-950/75
          dark:shadow-black/20
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

          {/* Desktop Navbar */}
          <DesktopNavbar
            user={user}
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
            handleNavClick={handleNavClick}
          />

          {/* Mobile Navbar */}
          <MobileNavbar
            isAuthenticated={isAuthenticated}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            handleLogout={handleLogout}
            handleNavClick={handleNavClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;