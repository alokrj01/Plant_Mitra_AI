import {
  Image,
  MessageSquareText,
  Stethoscope,
  Leaf,
  History,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Image,
    title: "Image Prediction",
    description:
      "Upload a plant image and let PlantMitra analyze visible symptoms to identify potential diseases.",
    label: "Visual analysis",
    className:
      "lg:col-span-2 bg-emerald-50/70 dark:bg-emerald-950/20",
    iconClassName:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-400",
  },
  {
    icon: MessageSquareText,
    title: "Text Prediction",
    description:
      "Describe the symptoms you are observing when an image is not enough or unavailable.",
    label: "Symptom analysis",
    className:
      "lg:col-span-2 bg-sky-50/70 dark:bg-sky-950/20",
    iconClassName:
      "bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-400",
  },
  {
    icon: Stethoscope,
    title: "Disease Insights",
    description:
      "Understand the predicted condition with relevant information about the detected disease.",
    label: "Understand the result",
    className:
      "lg:col-span-2 bg-white dark:bg-slate-950",
    iconClassName:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    icon: Leaf,
    title: "Treatment Guidance",
    description:
      "Get practical guidance related to the identified plant health issue.",
    label: "Next steps",
    className:
      "lg:col-span-2 bg-white dark:bg-slate-950",
    iconClassName:
      "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  },
  {
    icon: History,
    title: "Prediction History",
    description:
      "Keep track of previous plant analyses so you can revisit earlier predictions and insights.",
    label: "Track your analyses",
    className:
      "lg:col-span-3 bg-white dark:bg-slate-950",
    iconClassName:
      "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure Account",
    description:
      "Use your account to access your personalized prediction history and protected features.",
    label: "Account & access",
    className:
      "lg:col-span-3 bg-white dark:bg-slate-950",
    iconClassName:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Built around plant health analysis
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Everything you need to{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              understand your plant.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            PlantMitra combines AI-assisted prediction with disease
            information, treatment guidance, and prediction history in one
            platform.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 ${feature.className}`}
              >
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-slate-200/60 dark:border-slate-800/60" />

                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.iconClassName}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {feature.label}
                      </span>

                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-slate-700" />
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Ready to analyze your plant?
            </h3>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Start with an image or describe the symptoms you're seeing.
            </p>
          </div>

          <Link
            to="/register"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Get Started
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;