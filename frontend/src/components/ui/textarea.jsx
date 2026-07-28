import React from "react";

export const Textarea = ({
  value,
  onChange,
  placeholder = "",
  id,
  name,
  rows = 4,
  className = "",
  required = false,
  disabled = false,
  ...props
}) => {
  // Base Styles
  const baseStyles = `
    w-full
    p-4

    rounded-xl

    border
    border-gray-200
    dark:border-slate-700

    bg-gray-50/60
    dark:bg-slate-800/80

    text-slate-900
    dark:text-slate-100

    placeholder:text-gray-400
    dark:placeholder:text-slate-500

    transition-all
    duration-300
    ease-in-out
  `;

  // Focus Styles
  const focusStyles = `
    focus:outline-none

    focus:bg-white
    dark:focus:bg-slate-800

    focus:border-green-500
    dark:focus:border-green-400

    focus:ring-4
    focus:ring-green-500/10
    dark:focus:ring-green-400/20
  `;

  // Disabled Styles
  const disabledStyles = `
    disabled:cursor-not-allowed
    disabled:opacity-60

    disabled:bg-gray-100
    dark:disabled:bg-slate-900

    disabled:text-gray-400
    dark:disabled:text-slate-500
  `;

  // Layout
  const layoutStyles = `
    resize-y
    min-h-[120px]
    max-h-[400px]
    sm:text-sm
  `;

  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${focusStyles}
        ${disabledStyles}
        ${layoutStyles}
        ${className}
      `}
      {...props}
    />
  );
};