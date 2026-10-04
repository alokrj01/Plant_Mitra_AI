import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  ImageOff,
  Info,
  SearchCheck,
  ShieldAlert,
} from "lucide-react";

const limitations = [
  {
    icon: ImageOff,
    title: "Image quality matters",
    description:
      "Blurred, dark, distant, or partially visible plant images can make visual analysis less reliable.",
  },
  {
    icon: SearchCheck,
    title: "Predictions are not certainty",
    description:
      "An AI prediction represents the model's assessment of the available input and should not be treated as a definitive diagnosis.",
  },
  {
    icon: Info,
    title: "Symptoms can overlap",
    description:
      "Different diseases, pests, environmental conditions, and nutrient issues can sometimes produce similar symptoms.",
  },
  {
    icon: ShieldAlert,
    title: "Use professional judgment",
    description:
      "For serious, widespread, or uncertain plant health problems, consider consulting an agricultural or plant-health professional.",
  },
];

const AILimitations = () => {
  return (
    <section
      id="ai-limitations"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/5" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-400">
            <BrainCircuit className="h-4 w-4" />
            Understanding AI predictions
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            AI is helpful.{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Context matters.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            PlantMitra is designed to assist with plant health analysis, while
            keeping the limitations of AI-based predictions clear.
          </p>
        </div>

        {/* Main notice */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8 dark:border-amber-900/50 dark:bg-amber-950/10">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-300/20 blur-2xl dark:bg-amber-700/10" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Treat predictions as decision support
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                  PlantMitra can help you understand a possible plant health
                  condition, but the prediction depends on the quality and
                  type of information provided. Always consider the plant's
                  environment, symptoms, and other relevant factors before
                  taking action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations grid */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
          {limitations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Good input vs poor input */}
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Better input can lead to better analysis
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              When using image prediction, provide the clearest useful view of
              the affected plant area.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            
            {/* Helpful input */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Helpful input
                </h4>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                <li>• Clear and focused plant image</li>
                <li>• Visible affected area</li>
                <li>• Useful symptom description</li>
                <li>• Relevant plant information</li>
              </ul>
            </div>

            {/* Difficult input */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Difficult input
                </h4>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                <li>• Blurry or extremely dark image</li>
                <li>• Very limited view of the plant</li>
                <li>• Symptoms described without context</li>
                <li>• Symptoms that resemble multiple conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILimitations;