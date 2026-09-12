import { Sparkles } from "lucide-react";

const AiDisclaimer = () => {
  return (
    <section className="mx-auto mt-4 max-w-6xl">
      <div
        className="
          flex
          items-start
          gap-3
          rounded-2xl
          border
          border-emerald-100
          bg-emerald-50/50
          px-5
          py-4
          dark:border-emerald-900/60
          dark:bg-emerald-950/20
        "
      >
        <Sparkles
          className="
            mt-0.5
            h-4
            w-4
            shrink-0
            text-emerald-600
            dark:text-emerald-400
          "
        />

        <div>
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
            AI-assisted analysis
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            PlantMitra provides supportive insights and results may not always
            be accurate. Use the analysis alongside your own observation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiDisclaimer;