import { useEffect, useRef } from "react";

export default function Dropdown({
  open,
  onClose,
  children,
  className = "",
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className={`
        absolute
        right-0
        mt-2
        w-48
        rounded-xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        shadow-xl
        dark:shadow-black/40
        overflow-hidden
        animate-in
        fade-in
        zoom-in-95
        duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}