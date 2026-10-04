import { Link } from "react-router-dom";

const AuthFooter = ({
  text,
  link,
  linkText,
}) => {
  return (
    <div className="mt-8">

      <div className="relative">

        <div className="absolute inset-0 flex items-center pointer-events-none">

          <div className="w-full border-t border-slate-200 dark:border-slate-700" />

        </div>

        <div className="relative flex justify-center text-sm">

          <span className="px-2 font-sans bg-white/95 dark:bg-slate-900 text-slate-500 dark:text-slate-400">

            {text}

          </span>

        </div>

      </div>

      <Link
        to={link}
        className="
          mt-6
          flex
          h-12
          w-full
          items-center
          justify-center
          rounded-xl
          border-2
          border-green-100
          dark:border-green-900
          font-display
          font-semibold
          text-green-700
          dark:text-green-400
          transition-all
          duration-300
          hover:scale-[0.98]
          hover:bg-green-50
          dark:hover:bg-green-950/30
          hover:border-green-200
          dark:hover:border-green-700
        "
      >
        {linkText}
      </Link>

    </div>
  );
};

export default AuthFooter;