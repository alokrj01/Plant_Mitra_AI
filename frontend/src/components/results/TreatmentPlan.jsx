import {
  AlertTriangle,
  CheckCircle,
  Info,
  Pill,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

const TreatmentPlan = ({
  isHealthy,
  treatment,
}) => {
  if (isHealthy || !treatment) return null;

  const immediate = treatment.immediate ?? [];
  const prevention = treatment.prevention ?? [];

  return (
    <Card className="overflow-hidden shadow-lg border-green-100 dark:border-green-900">

      {/* Header */}

      <CardHeader className="bg-green-50/60 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900">

        <CardTitle className="font-display text-xl flex items-center gap-2 text-green-800 dark:text-green-300">

          <CheckCircle className="h-5 w-5" />

          Treatment Plan

        </CardTitle>

      </CardHeader>

      <CardContent className="p-0">

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">

          {/* Immediate Actions */}

          <section className="p-6 md:p-8 bg-white dark:bg-slate-900 hover:bg-red-50/30 dark:hover:bg-red-950/20 transition-colors">

            <h3 className="font-display font-bold text-lg flex items-center gap-2 text-red-700 dark:text-red-400 mb-5">

              <Pill className="h-5 w-5" />

              Immediate Actions

            </h3>

            {immediate.length > 0 ? (

              <ul className="space-y-4">

                {immediate.map((action, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-red-100 dark:bg-red-900/40 p-1 shrink-0">

                      <AlertTriangle className="h-3 w-3 text-red-600 dark:text-red-400" />

                    </div>

                    <span className="font-sans leading-relaxed text-sm text-slate-700 dark:text-slate-300">

                      {action}

                    </span>

                  </li>

                ))}

              </ul>

            ) : (

              <p className="italic text-sm text-slate-500 dark:text-slate-400">

                No immediate actions available.

              </p>

            )}

          </section>

          {/* Prevention */}

          <section className="p-6 md:p-8 bg-white dark:bg-slate-900 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-colors">

            <h3 className="font-display font-bold text-lg flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-5">

              <Info className="h-5 w-5" />

              Long-term Prevention

            </h3>

            {prevention.length > 0 ? (

              <ul className="space-y-4">

                {prevention.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-blue-100 dark:bg-blue-900/40 p-1 shrink-0">

                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400" />

                    </div>

                    <span className="font-sans leading-relaxed text-sm text-slate-700 dark:text-slate-300">

                      {item}

                    </span>

                  </li>

                ))}

              </ul>

            ) : (

              <p className="italic text-sm text-slate-500 dark:text-slate-400">

                No prevention strategies available.

              </p>

            )}

          </section>

        </div>

      </CardContent>

    </Card>
  );
};

export default TreatmentPlan;