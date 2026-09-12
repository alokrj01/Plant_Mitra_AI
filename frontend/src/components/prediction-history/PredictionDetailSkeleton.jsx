const PredictionDetailSkeleton = () => {
  return (
    <div
      className="
        min-h-screen
        bg-white
        px-4 pb-12 pt-28
        dark:bg-slate-950
        sm:px-6
      "
    >
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-9 w-32 rounded-xl bg-slate-200 dark:bg-slate-800" />

        <div className="mt-8 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />

          <div className="flex-1">
            <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="mt-3 h-8 w-64 max-w-full rounded bg-slate-200 dark:bg-slate-800" />
            <div className="mt-2 h-3 w-40 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>

        <div className="mt-8 h-44 rounded-3xl bg-slate-100 dark:bg-slate-900" />

        <div className="mt-4 h-36 rounded-2xl bg-slate-100 dark:bg-slate-900" />

        <div className="mt-4 h-40 rounded-2xl bg-slate-100 dark:bg-slate-900" />
      </div>
    </div>
  );
};

export default PredictionDetailSkeleton;