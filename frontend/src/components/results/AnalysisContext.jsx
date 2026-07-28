import { FileText, Image as ImageIcon, ShieldAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const AnalysisContext = ({
  type,
  description,
  input,
}) => {
  const fileSize =
    type === "image" && input?.fileSize
      ? `${(input.fileSize / 1024).toFixed(1)} KB`
      : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* =========================
          About the Condition
      ========================== */}

      <Card className="md:col-span-2 shadow-md hover:shadow-lg transition-shadow">

        <CardHeader className="pb-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/50">

          <CardTitle className="font-display text-lg flex items-center gap-2 text-slate-800 dark:text-slate-100">

            <ShieldAlert className="h-5 w-5 text-blue-600 dark:text-blue-400" />

            About the Condition

          </CardTitle>

        </CardHeader>

        <CardContent className="pt-6">

          <p className="font-sans leading-relaxed text-[15px] sm:text-base text-slate-700 dark:text-slate-300">

            {description ||
              "No specific details available for this condition."}

          </p>

        </CardContent>

      </Card>

      {/* =========================
          Analysis Context
      ========================== */}

      <Card className="shadow-md hover:shadow-lg transition-shadow">

        <CardHeader className="pb-3 border-b border-slate-200 dark:border-slate-700">

          <CardTitle className="font-display text-base flex items-center gap-2 text-slate-700 dark:text-slate-200">

            {type === "text" ? (
              <FileText className="h-4 w-4 text-green-600 dark:text-green-400" />
            ) : (
              <ImageIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
            )}

            Analysis Context

          </CardTitle>

        </CardHeader>

        <CardContent className="pt-4">

          {type === "text" ? (

            <div className="space-y-5">

              {/* Plant Type */}

              <div>

                <span className="block text-xs uppercase tracking-wide font-semibold text-slate-500 dark:text-slate-400 mb-1">

                  Plant Type

                </span>

                <p className="font-sans font-semibold text-slate-800 dark:text-slate-100">

                  {input?.plantType}

                </p>

              </div>

              {/* Symptoms */}

              <div>

                <span className="block text-xs uppercase tracking-wide font-semibold text-slate-500 dark:text-slate-400 mb-1">

                  Symptoms

                </span>

                <p className="font-sans leading-relaxed text-slate-700 dark:text-slate-300">

                  {input?.symptoms}

                </p>

              </div>

            </div>

          ) : (

            <div className="space-y-4">

              {input?.imagePreview && (

                <img
                  src={input.imagePreview}
                  alt="Analyzed Plant"
                  className="
                    w-full
                    h-40
                    rounded-xl
                    object-cover
                    border
                    border-slate-200
                    dark:border-slate-700
                    shadow-sm
                  "
                />

              )}

              <div className="flex items-center justify-between gap-3">

                <div className="min-w-0">

                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-500 dark:text-slate-400">

                    Uploaded Image

                  </p>

                  <p
                    className="truncate font-sans text-slate-700 dark:text-slate-300"
                    title={input?.fileName}
                  >
                    {input?.fileName}
                  </p>

                </div>

                <Badge variant="default">

                  {fileSize}

                </Badge>

              </div>

            </div>

          )}

        </CardContent>

      </Card>

    </div>
  );
};

export default AnalysisContext;