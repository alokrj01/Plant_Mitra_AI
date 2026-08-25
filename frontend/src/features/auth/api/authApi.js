import { api } from "../../../lib/api.js";

export async function register({ email, password }) {
  const response = await api.post("/api/v1/auth/register", {
    email,
    password,
  });

  return response.data;
}

export async function login({ email, password }) {
  const body = new URLSearchParams();

  body.append("username", email);
  body.append("password", password);

  const response = await api.post(
    "/api/v1/auth/login",
    body,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data;
}

export async function getMe() {
  const response = await api.get("/api/v1/auth/me");

  return response.data;
}

export async function refresh(refreshToken) {
  const response = await api.post(
    "/api/v1/auth/refresh",
    {
      refresh_token: refreshToken,
    },
  );

  return response.data;
}

export async function logout(refreshToken) {
  const response = await api.post(
    "/api/v1/auth/logout",
    {
      refresh_token: refreshToken,
    },
  );

  return response.data;
}
