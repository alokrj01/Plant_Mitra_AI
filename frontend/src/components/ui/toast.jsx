import React from "react";
import { X } from "lucide-react";

// =======================
// Toast Provider
// =======================
export const ToastProvider = ({ children }) => {
  return (
    <div
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        flex
        flex-col
        gap-3
        p-4

        sm:inset-x-auto
        sm:right-4
        sm:top-4
        sm:w-[420px]

        pointer-events-none
      "
    >
      {children}
    </div>
  );
};

// =======================
// Toast
// =======================
export const Toast = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variants = {
    default: `
      bg-white/95
      dark:bg-slate-900/95

      border-slate-200
      dark:border-slate-700

      text-slate-900
      dark:text-slate-100

      shadow-lg
      dark:shadow-2xl
    `,

    success: `
      bg-emerald-50/95
      dark:bg-emerald-950/50

      border-emerald-200
      dark:border-emerald-800

      text-emerald-900
      dark:text-emerald-200

      shadow-lg
    `,

    destructive: `
      bg-red-50/95
      dark:bg-red-950/50

      border-red-200
      dark:border-red-800

      text-red-900
      dark:text-red-200

      shadow-lg
    `,

    warning: `
      bg-amber-50/95
      dark:bg-amber-950/50

      border-amber-200
      dark:border-amber-800

      text-amber-900
      dark:text-amber-200

      shadow-lg
    `,
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`
        group

        relative

        pointer-events-auto

        flex
        items-start
        justify-between

        w-full

        gap-4

        overflow-hidden

        rounded-xl

        border

        p-4
        pr-10

        backdrop-blur-md

        transition-all
        duration-300

        animate-in
        fade-in
        slide-in-from-top-4
        sm:slide-in-from-right-4

        ${variants[variant] || variants.default}

        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// =======================
// Toast Title
// =======================
export const ToastTitle = ({ children }) => (
  <h4
    className="
      text-sm
      font-semibold
      leading-none
      tracking-tight
    "
  >
    {children}
  </h4>
);

// =======================
// Toast Description
// =======================
export const ToastDescription = ({ children }) => (
  <p
    className="
      mt-1

      text-sm

      text-slate-600
      dark:text-slate-400

      leading-relaxed
    "
  >
    {children}
  </p>
);

// =======================
// Close Button
// =======================
export const ToastClose = ({ onClick }) => (
  <button
    type="button"
    aria-label="Close notification"
    onClick={onClick}
    className="
      absolute

      right-2
      top-2

      rounded-lg

      p-1.5

      text-slate-500
      dark:text-slate-400

      opacity-0

      transition-all
      duration-200

      hover:bg-slate-100
      dark:hover:bg-slate-800

      hover:text-slate-900
      dark:hover:text-white

      focus:outline-none
      focus:ring-2
      focus:ring-emerald-500/50

      group-hover:opacity-100
      focus:opacity-100
    "
  >
    <X className="h-4 w-4" />
  </button>
);

// =======================
// Compatibility
// =======================
export const ToastViewport = () => null;