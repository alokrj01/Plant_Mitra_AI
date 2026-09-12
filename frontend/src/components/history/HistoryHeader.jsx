import { Leaf, Sparkles } from "lucide-react";

const HistoryHeader = ({ total = 0 }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl
              border border-emerald-200
              bg-emerald-50
              text-emerald-600
              shadow-sm
              dark:border-emerald-900/50
              dark:bg-emerald-950/40
              dark:text-emerald-400
            "
          >
            <Leaf className="h-6 w-6" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1
                className="
                  text-2xl font-bold tracking-tight
                  text-slate-900
                  dark:text-white
                  sm:text-3xl
                "
              >
                Prediction History
              </h1>

              <Sparkles className="hidden h-5 w-5 text-emerald-500 sm:block" />
            </div>

            <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
              Review your previous plant health analyses.
            </p>
          </div>
        </div>

        {total > 0 && (
          <div
            className="
              inline-flex w-fit items-center gap-2
              rounded-full
              border border-slate-200
              bg-white
              px-3.5 py-2
              text-xs font-medium
              text-slate-600
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {total} {total === 1 ? "prediction" : "predictions"}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryHeader;