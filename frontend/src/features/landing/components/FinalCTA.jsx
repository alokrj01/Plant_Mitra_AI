import { ArrowRight, Leaf, MessageSquareText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800/70 bg-emerald-950/40 px-3.5 py-1.5 text-sm font-medium text-emerald-400">
          <Sparkles className="h-4 w-4" />
          Start with what you know
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Give your plant{" "}
          <span className="text-emerald-400">a closer look.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Upload a plant image or describe the symptoms you're seeing. PlantMitra
          will help you turn those observations into AI-assisted disease
          insights and treatment guidance.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:bg-emerald-400 hover:shadow-xl sm:w-auto"
          >
            Start Analyzing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            to="/login"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
          >
            Sign In
          </Link>
        </div>

        {/* Two ways to start */}
        <div className="mx-auto mt-14 grid max-w-2xl gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/70 text-emerald-400">
                <Leaf className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Have a plant image?
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Start with Image Prediction.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-emerald-400">
                <MessageSquareText className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Only know the symptoms?
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Start with Text Prediction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <p className="mx-auto mt-8 max-w-xl text-xs leading-5 text-slate-500">
          PlantMitra provides AI-assisted insights for informational purposes.
          Predictions should be considered alongside your own observations and
          appropriate expert advice when needed.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;