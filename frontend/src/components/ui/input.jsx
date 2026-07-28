import React from "react";

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  id,
  name,
  className = "",
  required = false,
  disabled = false,
  ...props
}) => {
  const baseStyles = `
    w-full
    h-12
    px-4

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

  const disabledStyles = `
    disabled:cursor-not-allowed
    disabled:opacity-60

    disabled:bg-gray-100
    dark:disabled:bg-slate-900

    disabled:text-gray-400
    dark:disabled:text-slate-500
  `;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`${baseStyles} ${focusStyles} ${disabledStyles} ${className}`}
      {...props}
    />
  );
};