import { Leaf } from "lucide-react";

const AuthLayout = ({
  appName = "PlantMitra AI",
  tagline = "Advanced Plant Disease Detection",
  children,
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">

      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>

      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-[420px] py-8">

        {/* Logo */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

          <div className="flex justify-center mb-5">
            <div className="relative group">

              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full shadow-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>

            </div>
          </div>

          <h1 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {appName}
          </h1>

          <p className="mt-2 font-sans text-slate-500 dark:text-slate-400">
            {tagline}
          </p>

        </div>

        {children}

      </div>
    </div>
  );
};

export default AuthLayout;