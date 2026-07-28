import React from "react";

export const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {

  const variants = {

    default:
      "bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",

    primary:
      "bg-green-50 text-green-700 border-green-200/60 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",

    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",

    destructive:
      "bg-red-50 text-red-700 border-red-200/60 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",

    warning:
      "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",

    blue:
      "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",

  };

  const colorMap = {
    gray: "default",
    red: "destructive",
    green: "success",
    blue: "blue",
    yellow: "warning",
  };

  const selectedVariant =
    variants[
      variants[variant] ? variant : colorMap[variant]
    ] || variants.default;

  return (
    <div
      className={`
        inline-flex
        items-center
        justify-center

        px-2.5
        py-0.5

        text-xs
        font-semibold
        tracking-wide

        rounded-full

        border

        transition-all
        duration-200

        ${selectedVariant}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};