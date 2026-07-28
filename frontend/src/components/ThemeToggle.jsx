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

  return (
    <div className="relative">

      {/* Theme Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Theme"
        title="Theme"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full

          text-slate-600
          dark:text-slate-300

          hover:bg-slate-100
          dark:hover:bg-slate-800

          transition-all
          duration-300
        "
      >
        <CurrentIcon size={19} />
      </button>

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