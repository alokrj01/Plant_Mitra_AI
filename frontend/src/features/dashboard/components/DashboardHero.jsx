import { Sparkles } from "lucide-react";

const DashboardHero = () => {
  return (
    <section className="mx-auto max-w-5xl text-center">
      {/* Badge */}
      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-200
          bg-emerald-50/80
          px-4
          py-2
          text-xs
          font-semibold
          text-emerald-700
          shadow-sm
          backdrop-blur-sm
          dark:border-emerald-800/80
          dark:bg-emerald-950/40
          dark:text-emerald-400
        "
      >
        <Sparkles className="h-4 w-4" />
        AI-powered plant health analysis
      </div>

      {/* Heading */}
      <h1
        className="
          font-display
          text-4xl
          font-black
          leading-[1.08]
          tracking-tight
          text-slate-950
          dark:text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Understand what is
        <span className="block text-emerald-600 dark:text-emerald-400">
          affecting your plant.
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-slate-600
          dark:text-slate-400
          sm:text-lg
          sm:leading-8
        "
      >
        Analyze your plant using an image or describe its symptoms with
        text. Get AI-assisted disease insights and explore available
        treatment guidance.
      </p>

      {/* Capability row */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Image prediction
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Text prediction
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Treatment guidance
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;