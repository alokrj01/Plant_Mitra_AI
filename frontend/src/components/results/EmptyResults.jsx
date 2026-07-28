import { Activity } from "lucide-react";

const EmptyResults = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        py-14 px-6

        border-2 border-dashed
        border-slate-200 dark:border-slate-700

        rounded-3xl

        bg-slate-50/60 dark:bg-slate-900/40
      "
    >

      <div
        className="
          mb-5
          rounded-full
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-700
          p-4
          shadow-sm
        "
      >

        <Activity
          className="h-8 w-8 text-slate-300 dark:text-slate-600"
        />

      </div>

      <h3 className="font-display text-lg font-semibold text-slate-700 dark:text-slate-200">

        No predictions yet

      </h3>

      <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400">

        Upload a plant image or describe the symptoms above to
        generate an AI-powered diagnosis and treatment plan.

      </p>

    </div>
  );
};

export default EmptyResults;