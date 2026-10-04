import { ArrowLeft, ArrowRight } from "lucide-react";

const HistoryPagination = ({
  page,
  hasNext,
  onPrevious,
  onNext,
}) => {
  return (
    <div
      className="
        mt-8 flex items-center justify-between gap-4
        rounded-2xl
        border border-slate-200
        bg-white
        p-2
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={page === 1}
        className="
          inline-flex items-center gap-2
          rounded-xl
          px-3.5 py-2
          text-sm font-medium
          text-slate-600
          transition-colors
          hover:bg-slate-100
          hover:text-slate-900
          disabled:cursor-not-allowed
          disabled:opacity-35
          dark:text-slate-400
          dark:hover:bg-slate-800
          dark:hover:text-white
        "
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div
        className="
          rounded-xl
          bg-slate-100
          px-4 py-2
          text-xs font-semibold
          text-slate-600
          dark:bg-slate-800
          dark:text-slate-300
        "
      >
        Page {page}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        className="
          inline-flex items-center gap-2
          rounded-xl
          px-3.5 py-2
          text-sm font-medium
          text-slate-600
          transition-colors
          hover:bg-slate-100
          hover:text-slate-900
          disabled:cursor-not-allowed
          disabled:opacity-35
          dark:text-slate-400
          dark:hover:bg-slate-800
          dark:hover:text-white
        "
      >
        <span className="hidden sm:inline">Next</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default HistoryPagination;