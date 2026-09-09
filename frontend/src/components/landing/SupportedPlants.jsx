import {
  Apple,
  Flower2,
  Leaf,
  Sprout,
  Wheat,
  Trees,
} from "lucide-react";

const supportedPlants = [
  {
    name: "Apple",
    description: "Analyze common health symptoms affecting apple plants.",
    icon: Apple,
  },
  {
    name: "Tomato",
    description: "Identify potential issues from visible plant symptoms.",
    icon: Sprout,
  },
  {
    name: "Potato",
    description: "Use image or symptom-based analysis for plant health.",
    icon: Sprout,
  },
  {
    name: "Corn",
    description: "Review potential disease indicators from plant symptoms.",
    icon: Wheat,
  },
  {
    name: "Grape",
    description: "Analyze visible symptoms and receive disease insights.",
    icon: Leaf,
  },
  {
    name: "Peach",
    description: "Understand potential health conditions affecting the plant.",
    icon: Flower2,
  },
  {
    name: "Cherry",
    description: "Get AI-assisted insights from plant health symptoms.",
    icon: Trees,
  },
];

const SupportedPlants = () => {
  return (
    <section
      id="supported-plants"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-400">
            <Leaf className="h-4 w-4" />
            Supported plants
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Start with the plants{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              PlantMitra supports.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            PlantMitra's disease detection models are designed around specific
            plant categories. Select a supported plant when beginning your
            analysis for the most relevant experience.
          </p>
        </div>

        {/* Plants */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportedPlants.map((plant) => {
            const Icon = plant.icon;

            return (
              <article
                key={plant.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-900/70 dark:hover:bg-emerald-950/20"
              >
                {/* Decorative leaf */}
                <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full bg-emerald-100/60 transition-transform duration-300 group-hover:scale-125 dark:bg-emerald-950/30" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm dark:bg-slate-950 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                    {plant.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {plant.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Coverage note */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <Sprout className="h-4 w-4" />
            </div>

            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              Plant support can evolve as new datasets and disease classes are
              added to PlantMitra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedPlants;