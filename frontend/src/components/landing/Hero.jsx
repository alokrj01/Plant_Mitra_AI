import {
  ArrowRight,
  Brain,
  Camera,
  CheckCircle2,
  FileText,
  Leaf,
  ScanSearch,
  Sparkles,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 dark:bg-slate-950 sm:pt-28 lg:pt-32">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[550px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-emerald-100/60
            blur-3xl
            dark:bg-emerald-950/25
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            -left-40
            top-[350px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-green-100/50
            blur-3xl
            dark:bg-green-950/20
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-40
            top-[450px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-100/40
            blur-3xl
            dark:bg-emerald-950/20
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.04]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 pb-16 sm:pb-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:pb-24">

          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-200
                bg-emerald-50
                px-4
                py-2
                text-xs
                font-semibold
                text-emerald-700
                dark:border-emerald-800
                dark:bg-emerald-950/40
                dark:text-emerald-400
                sm:text-sm
              "
            >
              <Sparkles className="h-4 w-4" />
              AI-powered plant health analysis
            </div>

            {/* Main heading */}
            <h1
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-950
                dark:text-white
                sm:text-5xl
                lg:text-[4.5rem]
              "
            >
              Understand what is
              <span className="block text-emerald-600 dark:text-emerald-400">
                affecting your plant.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-slate-600
                dark:text-slate-300
                sm:text-lg
              "
            >
              Analyze your plant using an image or describe its symptoms
              with text. PlantMitra AI helps you identify potential diseases,
              understand the result, and explore available treatment
              guidance.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-emerald-600/20
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-emerald-700
                  hover:shadow-xl
                  hover:shadow-emerald-600/25
                  dark:bg-emerald-500
                  dark:hover:bg-emerald-400
                "
              >
                Start Analyzing
                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <a
                href="#how-it-works"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-700
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-emerald-200
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                  dark:hover:border-emerald-800
                  dark:hover:bg-emerald-950/30
                  dark:hover:text-emerald-400
                "
              >
                See How It Works
              </a>
            </div>

            {/* Capability list */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Image prediction
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Text prediction
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Treatment guidance
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — PRODUCT VISUALIZATION
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Glow behind product */}
            <div
              className="
                absolute
                -inset-8
                rounded-[3rem]
                bg-emerald-200/40
                blur-3xl
                dark:bg-emerald-900/20
              "
            />

            {/* Main product window */}
            <div
              className="
                relative
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-2
                shadow-2xl
                shadow-slate-300/50
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-black/40
              "
            >
              {/* Browser top */}
              <div className="flex items-center gap-1.5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />

                <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
                  <p className="truncate text-[10px] text-slate-400">
                    plantmitra.ai / analyze
                  </p>
                </div>
              </div>

              {/* App area */}
              <div className="rounded-[1.5rem] bg-slate-50 p-4 dark:bg-slate-950 sm:p-5">

                {/* App header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-100
                        dark:bg-emerald-950/50
                      "
                    >
                      <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        PlantMitra AI
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Plant Health Analysis
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-emerald-100
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      text-emerald-700
                      dark:bg-emerald-950/60
                      dark:text-emerald-400
                    "
                  >
                    AI READY
                  </span>
                </div>

                {/* Analysis selector */}
                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Choose analysis method
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">

                    {/* Image */}
                    <div
                      className="
                        rounded-2xl
                        border-2
                        border-emerald-500
                        bg-white
                        p-4
                        shadow-sm
                        dark:bg-slate-900
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/50">
                          <Camera className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        </div>

                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
                        Image Prediction
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                        Analyze a plant image
                      </p>
                    </div>

                    {/* Text */}
                    <div
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        dark:border-slate-800
                        dark:bg-slate-900
                      "
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                        <FileText className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
                        Text Prediction
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                        Describe plant symptoms
                      </p>
                    </div>
                  </div>
                </div>

                {/* Upload / image analysis */}
                <div
                  className="
                    relative
                    mt-4
                    flex
                    aspect-[16/9]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-emerald-100
                    bg-gradient-to-br
                    from-emerald-100
                    via-green-50
                    to-lime-100
                    dark:border-emerald-900
                    dark:from-emerald-950/60
                    dark:via-slate-900
                    dark:to-green-950/40
                  "
                >
                  {/* Decorative scan circles */}
                  <div className="absolute left-[18%] top-[15%] h-20 w-20 rounded-full border border-emerald-500/20" />
                  <div className="absolute right-[15%] bottom-[15%] h-28 w-28 rounded-full border border-emerald-500/20" />

                  {/* Image placeholder */}
                  <div className="relative text-center">
                    <div
                      className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/90
                        shadow-lg
                        backdrop-blur
                        dark:bg-slate-900/90
                      "
                    >
                      <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <p className="mt-4 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                      Plant image ready
                    </p>

                    <p className="mt-1 text-[10px] text-emerald-700/70 dark:text-emerald-400/70">
                      AI analysis in progress
                    </p>
                  </div>

                  {/* Scan badge */}
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/70
                      bg-white/80
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-emerald-700
                      shadow-sm
                      backdrop-blur
                      dark:border-slate-700
                      dark:bg-slate-900/80
                      dark:text-emerald-400
                    "
                  >
                    <ScanSearch className="h-3 w-3" />
                    Analyzing
                  </div>
                </div>

                {/* Result preview */}
                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">

                  {/* Prediction */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      dark:border-slate-800
                      dark:bg-slate-900
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                      <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        AI PREDICTION
                      </p>
                    </div>

                    <p className="mt-2 text-xs font-bold text-slate-900 dark:text-white">
                      Disease classification
                    </p>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full w-[82%] rounded-full bg-emerald-500" />
                    </div>

                    <p className="mt-2 text-[9px] text-slate-400">
                      Model confidence
                    </p>
                  </div>

                  {/* Status */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-emerald-50
                      p-4
                      dark:border-emerald-900
                      dark:bg-emerald-950/30
                    "
                  >
                    <p className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                      STATUS
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                      <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                        Ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                FLOATING CARD
            ===================================================== */}
            <div
              className="
                absolute
                -bottom-6
                -left-4
                hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-100
                    dark:bg-emerald-950/50
                  "
                >
                  <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Two ways to analyze
                  </p>

                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Image + Text AI
                  </p>
                </div>
              </div>
            </div>

            {/* Floating top badge */}
            <div
              className="
                absolute
                -right-3
                -top-2
                hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                py-2
                shadow-lg
                dark:border-slate-700
                dark:bg-slate-900
                sm:flex
              "
            >
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                  Upload & Analyze
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            HERO BOTTOM CAPABILITIES
        ========================================================= */}
        <div className="relative mx-auto max-w-5xl pb-16 sm:pb-20">
          <div
            className="
              grid
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
              sm:grid-cols-3
            "
          >
            {/* Image */}
            <div
              className="
                border-b
                border-slate-100
                p-5
                dark:border-slate-800
                sm:border-b-0
                sm:border-r
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                  <Camera className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Visual input
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                    Image Prediction
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className="
                border-b
                border-slate-100
                p-5
                dark:border-slate-800
                sm:border-b-0
                sm:border-r
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                  <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Symptom input
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                    Text Prediction
                  </p>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                  <Brain className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    AI output
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                    Disease Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;