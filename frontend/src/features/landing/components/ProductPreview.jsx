import {
  Activity,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ProductPreview = () => {
  return (
    <section
      id="product-preview"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-900/60 dark:bg-slate-950 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            See the analysis experience
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            From prediction to a{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              clearer picture.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            PlantMitra doesn't stop at a disease prediction. The result
            experience brings the prediction, supporting information, and
            treatment guidance together.
          </p>
        </div>

        {/* Product preview */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/30">
            {/* Browser header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>

              <div className="hidden rounded-lg border border-slate-200 bg-white px-5 py-1.5 text-xs text-slate-400 sm:block dark:border-slate-800 dark:bg-slate-950">
                app.plantmitra.ai
              </div>

              <div className="w-12" />
            </div>

            {/* Dashboard preview */}
            <div className="grid lg:grid-cols-[220px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-slate-200 bg-slate-50 p-5 lg:block dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Leaf className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    PlantMitra
                  </span>
                </div>

                <div className="mt-10 space-y-2">
                  <div className="rounded-xl bg-emerald-100 px-3 py-2.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    Dashboard
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-slate-500 dark:text-slate-400">
                    Predictions
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-sm text-slate-500 dark:text-slate-400">
                    History
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                  <p className="mt-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    AI-assisted analysis
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Use predictions as guidance alongside your own observation.
                  </p>
                </div>
              </aside>

              {/* Main preview */}
              <div className="p-5 sm:p-8">
                {/* Top bar */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Prediction result
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                      Plant health analysis
                    </h3>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-400">
                    <Activity className="h-3.5 w-3.5" />
                    Analysis complete
                  </div>
                </div>

                {/* Analysis content */}
                <div className="mt-7 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  {/* Plant image placeholder */}
                  <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-100 via-green-50 to-slate-100 dark:border-emerald-900/40 dark:from-emerald-950/60 dark:via-slate-900 dark:to-slate-950">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute left-12 top-14 h-32 w-32 rounded-full bg-emerald-300 blur-3xl dark:bg-emerald-700" />
                      <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-green-300 blur-3xl dark:bg-green-800" />
                    </div>

                    <div className="relative flex h-full items-center justify-center p-8">
                      <div className="text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-200 bg-white/80 text-emerald-600 shadow-lg backdrop-blur dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-400">
                          <Leaf className="h-9 w-9" />
                        </div>

                        <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Plant image analyzed
                        </p>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          Image Prediction
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/70 bg-white/80 p-3 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Input
                        </span>

                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Plant image
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Prediction result */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                            AI prediction
                          </p>

                          <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                            Disease prediction
                          </h4>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            Predicted condition
                          </span>

                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                            AI result
                          </span>
                        </div>

                        <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                          Plant disease detected
                        </p>

                        <div className="mt-4">
                          <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="text-slate-500 dark:text-slate-400">
                              Prediction confidence
                            </span>

                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              92%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            <div className="h-full w-[92%] rounded-full bg-emerald-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Disease info
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          Review information related to the predicted plant
                          health condition.
                        </p>

                        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          View insights
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                        <div className="flex items-center gap-2">
                          <CircleAlert className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Treatment
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          Explore guidance associated with the detected
                          condition.
                        </p>

                        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          View guidance
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />

                  <p className="text-xs leading-5 text-amber-800 dark:text-amber-300">
                    Predictions are AI-assisted estimates and should be
                    treated as guidance rather than a definitive diagnosis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom points */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            "Clear prediction results",
            "Relevant disease information",
            "Actionable treatment guidance",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;