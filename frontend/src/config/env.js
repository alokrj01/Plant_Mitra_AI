const apiUrl = import.meta.env.VITE_API_URL;
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!apiUrl) {
  throw new Error(
    "VITE_API_URL is not configured. Check your frontend environment file.",
  );
}

if (!googleClientId) {
  throw new Error(
    "VITE_GOOGLE_CLIENT_ID is not configured. Check your frontend environment file.",
  );
}

export const env = {
  apiUrl: apiUrl.replace(/\/+$/, ""),
  googleClientId,
};
