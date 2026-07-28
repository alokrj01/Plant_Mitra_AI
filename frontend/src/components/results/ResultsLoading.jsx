import { Leaf } from "lucide-react";

const ResultsLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">

      <div className="relative w-20 h-20">

        {/* Background Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200 dark:border-green-900"></div>

        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-green-600 dark:border-green-500 border-t-transparent animate-spin"></div>

        {/* Center Icon */}
        <Leaf
          size={24}
          className="absolute inset-0 m-auto text-green-600 dark:text-green-400 animate-pulse"
        />

      </div>

      <div className="text-center">

        <p className="font-display text-lg font-semibold text-green-800 dark:text-green-300">

          AI is analyzing plant data...

        </p>

        <p className="mt-1 text-sm font-sans text-slate-500 dark:text-slate-400">

          This usually takes a few seconds.

        </p>

      </div>

    </div>
  );
};

export default ResultsLoading;