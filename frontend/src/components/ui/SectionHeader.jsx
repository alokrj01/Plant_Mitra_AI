import React from "react";

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  iconClassName = "",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-1 text-center mb-6 ${className}`}
    >
      <div className="bg-green-100 dark:bg-green-900/40 p-2.5 rounded-full mb-1">
        <Icon
          className={`h-5 w-5 text-green-600 dark:text-green-400 ${iconClassName}`}
        />
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 max-w-xs">
        {subtitle}
      </p>
    </div>
  );
}