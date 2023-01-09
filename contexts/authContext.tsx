import type { ILoginCredentials, ISignupCredentials, IUserResponse } from "types/User";

import { createContext, useContext } from "react";

import { useStatus } from "hooks/useStatus";
import { useAuthService } from "hooks/useAuthService";
import { useAccountService } from "hooks/useAccountService";
import { logger } from "services/shared/logger-service";

const initialContext = {
  isLoggedIn: false,
  handleLogin: (credentials: ILoginCredentials) => {},
  handleRegister: (data: ISignupCredentials) => {},
  user: {} as IUserResponse,
  handleLogout: () => {},
};

const authContext = createContext(initialContext);

const AuthProvider = authContext.Provider;

export const useAuth = () => {
  const ctx = useContext(authContext);

  return ctx;
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { signup } = useAccountService();
  const { authenticate, logout, user } = useAuthService();
  const status = useStatus();

  const isLoggedIn = Boolean(user.token && user.name && user.email);

  const handleLogin = async (credentials: ILoginCredentials) => {
    try {
      status.setStatusLoading();
      await authenticate(credentials);
      status.setStatusSuccess();
    } catch (error) {
      status.setStatusError();
    }
  };

  const handleLogout = async () => {
    try {
      status.setStatusLoading();
      await logout();
      status.setStatusSuccess();
    } catch (error) {
      status.setStatusError();
    }
  };

  const handleRegister = async (data: ISignupCredentials) => {
    try {
      await signup(data);
      await handleLogin({ login: data.email, password: data.password });
    } catch (error) {
      logger("error", "front", `AuthContextProvider.handleRegister error: ${error}`);
    }
  };

  return <AuthProvider value={{ isLoggedIn, handleLogin, handleLogout, handleRegister, user }}>{children}</AuthProvider>;
};
