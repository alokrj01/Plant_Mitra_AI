export default function DropdownItem({
  icon: Icon,
  label,
  active,
  onClick,
  endIcon: EndIcon,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-3
        px-4
        py-3
        text-left
        transition-colors
        hover:bg-slate-100
        dark:hover:bg-slate-800

        ${
          active
            ? "text-green-600 dark:text-green-400 font-semibold"
            : "text-slate-700 dark:text-slate-200"
        }
      `}
    >
      <Icon size={18} />

      <span className="flex-1">{label}</span>

      {EndIcon && <EndIcon size={16} />}
    </button>
  );
}