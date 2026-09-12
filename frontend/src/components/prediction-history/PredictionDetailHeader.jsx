import { ArrowLeft, Clock3, FileText, Image } from "lucide-react";

const PredictionDetailHeader = ({
  prediction,
  onBack,
}) => {
  const isImagePrediction =
    prediction.prediction_type === "image";

  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className="
          inline-flex items-center gap-2
          rounded-xl
          px-2 py-1.5
          text-sm font-medium
          text-slate-500
          transition-colors
          hover:bg-slate-100
          hover:text-emerald-600
          dark:text-slate-400
          dark:hover:bg-slate-900
          dark:hover:text-emerald-400
        "
      >
        <ArrowLeft className="h-4 w-4" />
        Back to History
      </button>

      <div className="mt-7">
        <div className="flex items-start gap-4">
          <div
            className="
              flex h-14 w-14 shrink-0 items-center justify-center
              rounded-2xl
              border border-emerald-100
              bg-emerald-50
              text-emerald-600
              shadow-sm
              dark:border-emerald-900/50
              dark:bg-emerald-950/40
              dark:text-emerald-400
            "
          >
            {isImagePrediction ? (
              <Image className="h-6 w-6" />
            ) : (
              <FileText className="h-6 w-6" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="
                  rounded-full
                  bg-emerald-50
                  px-2.5 py-1
                  text-[10px] font-bold uppercase tracking-wider
                  text-emerald-700
                  dark:bg-emerald-950/40
                  dark:text-emerald-400
                "
              >
                {isImagePrediction
                  ? "Image Prediction"
                  : "Text Prediction"}
              </span>

              <span className="text-xs text-slate-400">
                #{prediction.id}
              </span>
            </div>

            <h1
              className="
                mt-2
                break-words
                text-2xl font-bold tracking-tight
                text-slate-900
                dark:text-white
                sm:text-3xl
              "
            >
              {prediction.predicted_class}
            </h1>

            <div
              className="
                mt-2 flex flex-wrap items-center gap-x-3 gap-y-1
                text-xs text-slate-500
                dark:text-slate-400
              "
            >
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                {new Date(prediction.created_at).toLocaleString([], {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PredictionDetailHeader;