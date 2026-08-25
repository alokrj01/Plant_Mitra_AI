const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error(
    "VITE_API_URL is not configured. Check your frontend environment file.",
  );
}

export const env = {
  apiUrl: apiUrl.replace(/\/+$/, ""),
};
