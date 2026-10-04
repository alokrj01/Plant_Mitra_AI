import {
  Image,
  MessageSquareText,
  BrainCircuit,
  Stethoscope,
  Leaf,
  ClipboardCheck,
  ArrowDown,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Image,
    title: "Choose how to analyze",
    description:
      "Upload an image of your plant or describe its symptoms using text.",
    tags: ["Image Prediction", "Text Prediction"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI analyzes the input",
    description:
      "PlantMitra processes the provided image or symptoms and identifies patterns related to plant health.",
    tags: ["AI Analysis", "Symptom Understanding"],
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Get disease insights",
    description:
      "The system provides an AI-assisted prediction along with relevant disease information.",
    tags: ["Prediction", "Disease Information"],
  },
  {
    number: "04",
    icon: Leaf,
    title: "Understand what to do next",
    description:
      "Review treatment guidance and practical information to help you understand the next steps.",
    tags: ["Treatment Guidance", "Plant Care"],
  },
];

const inputMethods = [
  {
    icon: Image,
    label: "Image",
    description: "Upload a plant image",
  },
  {
    icon: MessageSquareText,
    label: "Text",
    description: "Describe symptoms",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-900/60 dark:bg-slate-950 dark:text-emerald-400">
            <ClipboardCheck className="h-4 w-4" />
            Simple analysis workflow
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            From plant symptoms to{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              useful insights.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            PlantMitra brings image-based and symptom-based analysis into one
            simple workflow, helping you move from an observation to a clearer
            understanding of your plant's health.
          </p>
        </div>

        {/* Input methods */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {inputMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {method.label} Prediction
                      </h3>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center py-5">
            <ArrowDown className="h-5 w-5 text-slate-400 dark:text-slate-600" />
          </div>
        </div>

        {/* Workflow */}
        <div className="relative mx-auto max-w-5xl">
          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 lg:block dark:from-emerald-950 dark:via-emerald-700 dark:to-emerald-950" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 h-8 w-px bg-emerald-200 lg:hidden dark:bg-emerald-900" />
                  )}

                  <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
                    {/* Step icon */}
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900/70 dark:bg-emerald-950/50 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Step number */}
                    <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-300 dark:text-slate-700">
                      {step.number}
                    </span>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desktop arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-5 top-12 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm lg:flex dark:border-emerald-900 dark:bg-slate-950 dark:text-emerald-400">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-5 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              One workflow, two ways to start.
            </span>{" "}
            Whether you have a clear image or only a description of the
            symptoms, PlantMitra guides the analysis toward the same goal:
            understanding your plant's health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;