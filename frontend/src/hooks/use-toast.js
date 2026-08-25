import { useCallback, useEffect, useState } from "react";

const TOAST_DURATION = 3000;

let toastState = [];
let listeners = new Set();

const emit = () => {
  listeners.forEach((listener) => {
    listener(toastState);
  });
};

const removeToast = (id) => {
  toastState = toastState.filter(
    (toast) => toast.id !== id,
  );

  emit();
};

const addToast = ({
  title,
  description,
  variant = "default",
  action,
}) => {
  const id = crypto.randomUUID();

  toastState = [
    ...toastState,
    {
      id,
      title,
      description,
      variant,
      action,
    },
  ];

  emit();

  window.setTimeout(() => {
    removeToast(id);
  }, TOAST_DURATION);

  return {
    id,
    dismiss: () => removeToast(id),
  };
};

export const useToast = () => {
  const [toasts, setToasts] = useState(toastState);

  useEffect(() => {
    const listener = (nextToasts) => {
      setToasts(nextToasts);
    };

    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const toast = useCallback(
    (options) => addToast(options),
    [],
  );

  const dismiss = useCallback(
    (id) => removeToast(id),
    [],
  );

  return {
    toasts,
    toast,
    dismiss,
  };
};
