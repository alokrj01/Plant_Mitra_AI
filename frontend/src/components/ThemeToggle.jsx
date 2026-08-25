import { useState } from "react";
import {
  Moon,
  Sun,
  Monitor,
  Check,
} from "lucide-react";
import { useTheme } from "next-themes";

import Dropdown from "./ui/Dropdown";
import DropdownItem from "./ui/DropdownItem";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const CurrentIcon =
    theme === "system"
      ? Monitor
      : resolvedTheme === "dark"
      ? Moon
      : Sun;

  const themeLabel =
    theme === "system"
      ? "System Theme"
      : resolvedTheme === "dark"
      ? "Dark Mode"
      : "Light Mode";

  return (
    <div className="relative group">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Theme: ${themeLabel}`}
        aria-expanded={open}
        aria-haspopup="menu"
        title={themeLabel}
        className="
          flex
          h-9
          w-9
          sm:h-10
          sm:w-10
          items-center
          justify-center
          rounded-xl

          text-slate-600
          dark:text-slate-300

          hover:bg-slate-100
          dark:hover:bg-slate-800

          hover:text-green-600
          dark:hover:text-green-400

          transition-all
          duration-300

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-green-500
          focus-visible:ring-offset-2
          dark:focus-visible:ring-offset-slate-900
        "
      >
        <CurrentIcon
          size={19}
          aria-hidden="true"
        />
      </button>

      {/* Theme Tooltip */}
      {!open && (
        <div
          role="tooltip"
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
          {themeLabel}
        </div>
      )}

      {/* Dropdown */}
      <Dropdown
        open={open}
        onClose={() => setOpen(false)}
      >
        <DropdownItem
          icon={Sun}
          label="Light"
          active={theme === "light"}
          endIcon={theme === "light" ? Check : null}
          onClick={() => {
            setTheme("light");
            setOpen(false);
          }}
        />

        <DropdownItem
          icon={Moon}
          label="Dark"
          active={theme === "dark"}
          endIcon={theme === "dark" ? Check : null}
          onClick={() => {
            setTheme("dark");
            setOpen(false);
          }}
        />

        <DropdownItem
          icon={Monitor}
          label="System"
          active={theme === "system"}
          endIcon={theme === "system" ? Check : null}
          onClick={() => {
            setTheme("system");
            setOpen(false);
          }}
        />
      </Dropdown>
    </div>
  );
}