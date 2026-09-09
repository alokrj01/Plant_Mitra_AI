import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  Sparkles,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const AnalysisMethods = () => {
  return (
    <section
      id="analysis"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl dark:bg-emerald-950/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            Two ways to start an analysis
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Analyze your plant
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}
              your way.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Have a photo? Upload it. Only know the symptoms? Describe them.
            PlantMitra gives you two different ways to begin understanding
            what's affecting your plant.
          </p>
        </div>

        {/* Analysis cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* =====================================================
              IMAGE PREDICTION
          ===================================================== */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900 dark:from-emerald-950/40 dark:via-slate-900 dark:to-green-950/30 sm:p-8">

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-2xl dark:bg-emerald-900/20" />

            <div className="relative">

              {/* Icon + label */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20">
                  <Camera className="h-6 w-6 text-white" />
                </div>

                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm dark:bg-slate-900/80 dark:text-emerald-400">
                  Visual Analysis
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black text-slate-900 dark:text-white">
                Image Prediction
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                Upload a clear image of your plant or affected leaf and let
                the computer vision model analyze its visual characteristics.
              </p>

              {/* Mini interface */}
              <div className="mt-7 rounded-2xl border border-emerald-100 bg-white/80 p-4 backdrop-blur dark:border-emerald-900 dark:bg-slate-900/70">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/50">
                    <ImageIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Plant image
                    </p>

                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      Upload an image for analysis
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 py-8 dark:border-emerald-800 dark:bg-emerald-950/20">
                  <div className="text-center">
                    <Camera className="mx-auto h-7 w-7 text-emerald-500" />

                    <p className="mt-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                      Upload plant image
                    </p>

                    <p className="mt-1 text-[10px] text-emerald-700/60 dark:text-emerald-400/60">
                      Start visual analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Analyze visible plant symptoms",
                  "Receive an AI disease prediction",
                  "Review prediction confidence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400"
              >
                Try image prediction
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* =====================================================
              TEXT PREDICTION
          ===================================================== */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-slate-100 blur-2xl dark:bg-slate-800/40" />

            <div className="relative">

              {/* Icon + label */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 shadow-lg dark:bg-slate-700">
                  <FileText className="h-6 w-6 text-white" />
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
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

              {/* Mini interface */}
              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                    <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Describe symptoms
                    </p>

                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      Tell PlantMitra what you're observing
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-xs leading-6 text-slate-400 dark:text-slate-500">
                    "The leaves have developed yellow spots and the edges
                    appear to be turning brown..."
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      Symptom description
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600">
                      <ArrowRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Describe symptoms in your own words",
                  "Get an AI-assisted analysis",
                  "Useful when no clear image is available",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200"
              >
                Try text prediction
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50">
            <Brain className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </div>

          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            Both approaches are designed to help turn plant symptoms into
            useful AI-assisted disease insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnalysisMethods;