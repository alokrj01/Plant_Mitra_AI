const ACCESS_TOKEN_KEY = "plant_mitra_access_token";
const REFRESH_TOKEN_KEY = "plant_mitra_refresh_token";

function normalizeTokens(tokens) {
  return {
    accessToken:
      tokens.accessToken ?? tokens.access_token,
    refreshToken:
      tokens.refreshToken ?? tokens.refresh_token,
  };
}

export const tokenStorage = {
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  setTokens(tokens) {
    const {
      accessToken,
      refreshToken,
    } = normalizeTokens(tokens);

    if (!accessToken || !refreshToken) {
      throw new Error(
        "Invalid authentication token response.",
      );
    }

    localStorage.setItem(
      ACCESS_TOKEN_KEY,
      accessToken,
    );

    localStorage.setItem(
      REFRESH_TOKEN_KEY,
      refreshToken,
    );
  },

  clearTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
