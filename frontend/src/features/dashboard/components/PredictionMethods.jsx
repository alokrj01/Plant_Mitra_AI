import { Leaf, Camera, FileText } from "lucide-react";

import TextPrediction from "../../../pages/TextPredictionPage.jsx";
import ImagePrediction from "../../../pages/ImagePredictionPage.jsx";

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
          className="group relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900 dark:from-emerald-950/40 dark:via-slate-900 dark:to-green-950/30 sm:p-8"
        >

          {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-2xl dark:bg-emerald-900/20" />

            <div className="relative">
               {/* Icon + label */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20">
                  <FileText className="h-6 w-6 text-white" />
                </div>

                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm dark:bg-slate-900/80 dark:text-emerald-400">
                  Symptom Analysis
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black text-slate-900 dark:text-white">
                Text Prediction
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                Describe what you're seeing on your plant. Use symptoms such
                as discoloration, spots, wilting, or unusual growth to begin
                a text-based analysis.
              </p>

            </div>

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
          className="group relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900 dark:from-emerald-950/40 dark:via-slate-900 dark:to-green-950/30 sm:p-8"
        >

          {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-2xl dark:bg-emerald-900/20" />

            <div className="relative">
               {/* Icon + label */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20">
                  <FileText className="h-6 w-6 text-white" />
                </div>

                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm dark:bg-slate-900/80 dark:text-emerald-400">
                  Visual Analysis
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black text-slate-900 dark:text-white">
                Image Prediction
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                Upload a clear image of your plant or affected leaf and let the computer vision model analyze itsvisual characteristics. 
              </p>

            </div>

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