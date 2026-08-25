import axios from "axios";

import { env } from "../config/env.js";
import { tokenStorage } from "./storage.js";
import { notifyAuthenticationFailure } from "../features/auth/authEvents.js";

export const api = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = tokenStorage.getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error),
);

let refreshPromise = null;

async function refreshAccessToken() {
  const refreshToken = tokenStorage.getRefreshToken();

  if (!refreshToken) {
    throw new Error("No refresh token available.");
  }

  const response = await axios.post(
    `${env.apiUrl}/api/v1/auth/refresh`,
    {
      refresh_token: refreshToken,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 15000,
    },
  );

  const tokens = response.data;

  tokenStorage.setTokens(tokens);

  return tokens.access_token;
}

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    if (
      originalRequest?.url?.includes("/api/v1/auth/refresh") ||
      originalRequest?.url?.includes("/api/v1/auth/login") ||
      originalRequest?._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }

      const newAccessToken = await refreshPromise;

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      tokenStorage.clearTokens();
      notifyAuthenticationFailure();

      return Promise.reject(refreshError);
    }
  },
);
