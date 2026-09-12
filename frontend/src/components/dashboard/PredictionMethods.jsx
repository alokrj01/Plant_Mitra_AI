import { Leaf } from "lucide-react";

import TextPrediction from "../TextPrediction.jsx";
import ImagePrediction from "../ImagePrediction.jsx";

const PredictionMethods = ({ onResult, onLoading }) => {
  return (
    <section className="mx-auto mt-16 max-w-6xl sm:mt-20">
      {/* Section heading */}
      <div className="mb-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Leaf className="h-4 w-4 text-emerald-500" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-emerald-600
              dark:text-emerald-400
            "
          >
            Choose your analysis method
          </span>
        </div>

        <h2
          className="
            font-display
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
            sm:text-3xl
          "
        >
          Start with an image or symptoms
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          Use whichever information you have available to begin your
          plant health analysis.
        </p>
      </div>

      {/* Prediction cards */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Text Prediction */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200/80
            bg-white/80
            shadow-lg
            shadow-slate-900/5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-emerald-900/10
            dark:border-slate-800
            dark:bg-slate-900/75
            dark:shadow-black/20
            dark:hover:border-emerald-900
          "
        >
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-500
              to-transparent
              opacity-60
            "
          />

          <div className="p-5 sm:p-7">
            <TextPrediction
              onResult={onResult}
              onLoading={onLoading}
            />
          </div>
        </div>

        {/* Image Prediction */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200/80
            bg-white/80
            shadow-lg
            shadow-slate-900/5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-emerald-900/10
            dark:border-slate-800
            dark:bg-slate-900/75
            dark:shadow-black/20
            dark:hover:border-emerald-900
          "
        >
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-500
              to-transparent
              opacity-60
            "
          />

          <div className="p-5 sm:p-7">
            <ImagePrediction
              onResult={onResult}
              onLoading={onLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionMethods;