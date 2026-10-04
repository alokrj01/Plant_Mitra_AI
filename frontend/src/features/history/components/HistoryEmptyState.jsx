import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

const HistoryEmptyState = () => {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-dashed
        border-slate-300
        bg-white
        px-6 py-16
        text-center
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-950/30" />

      <div
        className="
          relative mx-auto flex h-16 w-16
          items-center justify-center
          rounded-2xl
          border border-emerald-100
          bg-emerald-50
          text-emerald-600
          shadow-sm
          dark:border-emerald-900/50
          dark:bg-emerald-950/40
          dark:text-emerald-400
        "
      >
        <Leaf className="h-7 w-7" />

        <Sparkles className="absolute -right-2 -top-2 h-4 w-4 text-emerald-400" />
      </div>

      <h2
        className="
          relative mt-6
          text-xl font-bold
          text-slate-900
          dark:text-white
        "
      >
        Your history is empty
      </h2>

      <p
        className="
          relative mx-auto mt-2 max-w-md
          text-sm leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        Run your first plant analysis and your saved predictions
        will appear here.
      </p>

      <Link
        to="/dashboard"
        className="
          relative mt-7
          inline-flex items-center gap-2
          rounded-xl
          bg-emerald-600
          px-5 py-2.5
          text-sm font-semibold text-white
          shadow-sm shadow-emerald-200
          transition-all
          hover:-translate-y-0.5
          hover:bg-emerald-500
          hover:shadow-md
          dark:bg-emerald-500
          dark:text-slate-950
          dark:shadow-none
          dark:hover:bg-emerald-400
        "
      >
        Start a Prediction
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default HistoryEmptyState;