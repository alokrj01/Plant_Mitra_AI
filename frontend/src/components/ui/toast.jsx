import React from "react";
import { X } from "lucide-react";

// Toast Provider
export const ToastProvider = ({ children }) => {
  return (
    <div
      className="
        fixed
        z-[100]
        flex
        flex-col
        gap-3

        p-4

        top-0
        w-full

        sm:top-4
        sm:right-4
        sm:w-[400px]

        pointer-events-none
      "
    >
      {children}
    </div>
  );
};

// Toast
export const Toast = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variants = {
    default: `
      bg-white/90
      dark:bg-slate-900/95

      border-gray-200
      dark:border-slate-700

      text-slate-900
      dark:text-slate-100

      backdrop-blur-md

      shadow-[0_8px_30px_rgb(0,0,0,0.08)]
      dark:shadow-[0_8px_30px_rgb(0,0,0,0.45)]
    `,

    success: `
      bg-emerald-50/95
      dark:bg-emerald-950/60

      border-emerald-200
      dark:border-emerald-800

      text-emerald-900
      dark:text-emerald-300

      backdrop-blur-md

      shadow-[0_8px_30px_rgb(5,150,105,0.12)]
      dark:shadow-[0_8px_30px_rgb(5,150,105,0.25)]
    `,

    destructive: `
      bg-red-50/95
      dark:bg-red-950/60

      border-red-200
      dark:border-red-800

      text-red-900
      dark:text-red-300

      backdrop-blur-md

      shadow-[0_8px_30px_rgb(220,38,38,0.12)]
      dark:shadow-[0_8px_30px_rgb(220,38,38,0.25)]
    `,
  };

  return (
    <div
      className={`
        group

        pointer-events-auto

        relative

        flex
        w-full
        items-start
        justify-between

        space-x-4

        overflow-hidden

        rounded-2xl

        border

        p-4
        pr-8

        transition-all
        duration-300

        animate-in
        slide-in-from-top-5
        sm:slide-in-from-right-5

        ${variants[variant] || variants.default}

        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Toast Title
export const ToastTitle = ({ children }) => (
  <div
    className="
      text-sm
      font-semibold
      tracking-wide
      leading-none
      mb-1.5
    "
  >
    {children}
  </div>
);

// Toast Description
export const ToastDescription = ({ children }) => (
  <div
    className="
      text-sm
      opacity-80
      leading-snug
    "
  >
    {children}
  </div>
);

// Close Button
export const ToastClose = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute
      right-2
      top-2

      rounded-full

      p-1.5

      text-slate-500
      dark:text-slate-400

      opacity-0

      transition-all

      hover:bg-black/5
      dark:hover:bg-white/10

      hover:text-slate-900
      dark:hover:text-white

      focus:opacity-100
      group-hover:opacity-100
    "
  >
    <X className="h-4 w-4" />
  </button>
);

// Compatibility
export const ToastViewport = () => null;