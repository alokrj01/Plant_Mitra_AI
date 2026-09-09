import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const technologies = [
  {
    icon: Code2,
    category: "Frontend",
    title: "React",
    description:
      "A responsive interface for plant analysis, prediction results, authentication, and user workflows.",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    icon: Server,
    category: "Backend",
    title: "FastAPI",
    description:
      "A Python backend that handles authentication, prediction requests, disease data, and application APIs.",
    technologies: ["Python", "FastAPI", "Pydantic"],
  },
  {
    icon: BrainCircuit,
    category: "AI / ML",
    title: "Machine Learning",
    description:
      "PlantMitra uses trained machine learning models to analyze plant health inputs and generate disease predictions.",
    technologies: ["PyTorch", "Transformers", "Scikit-learn"],
  },
  {
    icon: Database,
    category: "Data",
    title: "PostgreSQL",
    description:
      "Structured application data such as users, predictions, disease information, and prediction history.",
    technologies: ["PostgreSQL", "SQLAlchemy", "Alembic"],
  },
];

const architecture = [
  {
    icon: Layers3,
    title: "React Client",
    description: "User interface and analysis workflows",
  },
  {
    icon: Workflow,
    title: "FastAPI API",
    description: "Application logic and request handling",
  },
  {
    icon: BrainCircuit,
    title: "AI Models",
    description: "Plant disease prediction",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Persistent application data",
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-900/60 dark:bg-slate-950 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            Built with modern technology
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Technology behind{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              PlantMitra.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            A modern application stack brings together a responsive frontend,
            Python backend, machine learning models, and persistent data
            storage.
          </p>
        </div>

        {/* Technology cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.category}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-105 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {technology.category}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                      {technology.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {technology.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {technology.technologies.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Architecture */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              How the pieces work together
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Each layer has a focused responsibility, making the platform
              easier to maintain and extend.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid gap-4 md:grid-cols-4">
              {architecture.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="relative">
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    {index < architecture.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex dark:border-slate-800 dark:bg-slate-950">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Security / engineering note */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Secure authentication
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Protected user accounts and authenticated application
                workflows.
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Structured API
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Backend responsibilities are separated into focused API
                services and data layers.
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Cloud deployment
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                The application is designed to run as a deployed web
                application rather than only as a local prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;