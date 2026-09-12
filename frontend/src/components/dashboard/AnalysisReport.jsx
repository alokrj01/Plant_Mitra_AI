import { Sparkles } from "lucide-react";

import Results from "../Results.jsx";

const AnalysisReport = ({ results, isLoading }) => {
  return (
    <section className="mx-auto mt-20 max-w-6xl sm:mt-24">
      {/* Section divider */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-500" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-500
              dark:text-slate-400
              sm:text-xs
            "
          >
            Analysis Report
          </span>
        </div>

        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Results */}
      <div className="animate-in fade-in duration-700">
        <Results
          results={results}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default AnalysisReport;