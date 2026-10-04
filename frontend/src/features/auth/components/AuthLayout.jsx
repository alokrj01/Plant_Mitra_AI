import { Leaf, ShieldCheck, Sparkles, History } from "lucide-react";

const AuthLayout = ({
  appName = "PlantMitra AI",
  tagline = "Advanced Plant Disease Detection",
  children,
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">

      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>

      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Auth Container */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl">

        {/* ========================= */}
        {/* Left: Product Information */}
        {/* ========================= */}

        <div className="hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/40 dark:via-emerald-950/30 dark:to-slate-900">

          <div>

            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-25"></div>

                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
              </div>

              <div>
                <h1 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {appName}
                </h1>

                <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {tagline}
                </p>
              </div>
            </div>

            {/* Main Message */}
            <div className="max-w-md">
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                Intelligent Plant Care
              </p>

              <h2 className="font-display text-4xl xl:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Detect.
                <br />
                Understand.
                <br />
                <span className="text-green-600 dark:text-green-400">
                  Protect.
                </span>
              </h2>

              <p className="mt-6 font-sans text-base leading-7 text-slate-600 dark:text-slate-300">
                Use AI to identify plant diseases, understand symptoms,
                and get actionable treatment guidance for healthier plants.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/80 dark:bg-slate-800 p-2.5 shadow-sm">
                  <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>

                <div>
                  <p className="font-display font-semibold text-slate-900 dark:text-white">
                    AI-powered diagnosis
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Analyze plant symptoms and images.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/80 dark:bg-slate-800 p-2.5 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>

                <div>
                  <p className="font-display font-semibold text-slate-900 dark:text-white">
                    Treatment guidance
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Get practical recommendations for your plants.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/80 dark:bg-slate-800 p-2.5 shadow-sm">
                  <History className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>

                <div>
                  <p className="font-display font-semibold text-slate-900 dark:text-white">
                    Track your predictions
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Keep your plant analysis history in one place.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom statement */}
          <div className="mt-12">
            <p className="font-display text-sm font-medium text-slate-500 dark:text-slate-400">
              Smarter plant care, powered by AI.
            </p>
          </div>

        </div>

        {/* ========================= */}
        {/* Right: Authentication */}
        {/* ========================= */}

        <div className="flex items-center justify-center p-4 sm:p-8 lg:p-10">

          <div className="w-full max-w-[420px]">

            {/* Mobile Logo */}
            <div className="flex flex-col items-center text-center mb-5 sm:mb-8 lg:hidden">

              <div className="relative mb-3 sm:mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-25"></div>

                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3.5 rounded-full shadow-lg">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {appName}
              </h1>

              <p className="mt-2 font-sans text-sm text-slate-500 dark:text-slate-400">
                {tagline}
              </p>

            </div>

            {children}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;