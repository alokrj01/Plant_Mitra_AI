import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast.jsx";

import { useToast } from "../../hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider>
      {toasts.map(
        ({
          id,
          title,
          description,
          action,
          variant,
        }) => {
          let Icon = Info;
          let iconColor =
            "text-slate-500 dark:text-slate-400";

          switch (variant) {
            case "success":
              Icon = CheckCircle2;
              iconColor =
                "text-emerald-500 dark:text-emerald-400";
              break;

            case "destructive":
              Icon = AlertCircle;
              iconColor =
                "text-red-500 dark:text-red-400";
              break;

            case "warning":
              Icon = AlertTriangle;
              iconColor =
                "text-amber-500 dark:text-amber-400";
              break;

            default:
              Icon = Info;
          }

          return (
            <Toast
              key={id}
              variant={variant}
            >
              <div className="flex w-full items-start gap-3">
                <Icon
                  className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`}
                />

                <div className="grid flex-1 gap-1">
                  {title && (
                    <ToastTitle>
                      {title}
                    </ToastTitle>
                  )}

                  {description && (
                    <ToastDescription variant={variant}>
                      {description}
                    </ToastDescription>
                  )}
                </div>
              </div>

              {action}

              <ToastClose
                onClick={() => dismiss(id)}
              />
            </Toast>
          );
        },
      )}

      <ToastViewport />
    </ToastProvider>
  );
}
