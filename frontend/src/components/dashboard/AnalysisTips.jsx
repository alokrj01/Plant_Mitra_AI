import { Leaf } from "lucide-react";

const AnalysisTips = () => {
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <div
        className="
          rounded-2xl
          border
          border-slate-200/80
          bg-white/70
          px-5
          py-4
          shadow-sm
          backdrop-blur-xl
          dark:border-slate-800
          dark:bg-slate-900/60
        "
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                dark:bg-emerald-950/40
              "
            >
              <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Analysis Tips
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Get better results by providing clear information.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Clear image</span>
            <span>•</span>
            <span>Visible symptoms</span>
            <span>•</span>
            <span>Good lighting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTips;