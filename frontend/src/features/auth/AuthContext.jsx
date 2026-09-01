import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContext } from "./authContext.js";
import { setAuthenticationFailureHandler } from "./authEvents.js";

import {
  getMe,
  login as loginRequest,
  googleLogin as googleLoginRequest,
  logout as logoutRequest,
  register as registerRequest,
} from "./api/authApi.js";

import { tokenStorage } from "../../lib/storage.js";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const isAuthenticated = Boolean(user);

  const loadCurrentUser = useCallback(async () => {
    const accessToken = tokenStorage.getAccessToken();

    if (!accessToken) {
      setUser(null);
      return null;
    }

    try {
      const currentUser = await getMe();

      setUser(currentUser);

      return currentUser;
    } catch {
      tokenStorage.clearTokens();
      setUser(null);

      return null;
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        if (!mounted) return;

        await loadCurrentUser();
      } finally {
        if (mounted) {
          setIsInitializing(false);
        }
      }
    };

    initializeAuth();

    return () => {
      mounted = false;
    };
  }, [loadCurrentUser]);

  useEffect(() => {
     const handleAuthenticationFailure = () => {
       tokenStorage.clearTokens();
       setUser(null);
     };
   
     setAuthenticationFailureHandler(
       handleAuthenticationFailure,
     );

     return () => {
       setAuthenticationFailureHandler(null);
     };
  }, []);

  const login = useCallback(
    async ({ email, password }) => {
      const tokens = await loginRequest({
        email,
        password,
      });

      tokenStorage.setTokens(tokens);

      const currentUser = await loadCurrentUser();

      if (!currentUser) {
        tokenStorage.clearTokens();

        throw new Error(
          "Unable to load authenticated user.",
        );
      }

      return currentUser;
    },
    [loadCurrentUser],
  );

  const googleLogin = useCallback(
  async (idToken) => {
    const tokens = await googleLoginRequest(idToken);

    tokenStorage.setTokens(tokens);

    const currentUser = await loadCurrentUser();

    if (!currentUser) {
      tokenStorage.clearTokens();

      throw new Error(
        "Unable to load authenticated user.",
      );
    }

    return currentUser;
  },
  [loadCurrentUser],
  );

  const register = useCallback(
    async ({ email, password }) => {
      return registerRequest({
        email,
        password,
      });
    },
    [],
  );

  const logout = useCallback(async () => {
    const refreshToken = tokenStorage.getRefreshToken();

    try {
      if (refreshToken) {
        await logoutRequest(refreshToken);
      }
    } finally {
      tokenStorage.clearTokens();
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isInitializing,
      login,
      googleLogin,
      register,
      logout,
    }),
    [
      user,
      isAuthenticated,
      isInitializing,
      login,
      googleLogin,
      register,
      logout,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
