import { Activity } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

const DiagnosisCard = ({
  disease,
  confidence,
  severity,
  isHealthy,
}) => {
  return (
    <Card
      className={`overflow-hidden border-0 shadow-xl ${
        isHealthy
          ? "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/40 dark:to-emerald-900/30"
          : "bg-gradient-to-br from-orange-50 to-red-50 dark:from-red-950/40 dark:to-orange-950/30"
      }`}
    >
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left Side */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <Activity
                className={`h-5 w-5 ${
                  isHealthy
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              />

              <span className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Diagnosis
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              {disease}
            </h2>

            <Badge
              variant={isHealthy ? "success" : "destructive"}
              className="w-fit"
            >
              {isHealthy ? "Healthy Plant" : severity}
            </Badge>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-72">
            <div className="rounded-2xl border border-white/50 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm p-5">

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Confidence
                </span>

                <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {confidence.toFixed(1)}%
                </span>
              </div>

              <Progress
                value={confidence}
                color={isHealthy ? "green" : "red"}
              />

            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosisCard;