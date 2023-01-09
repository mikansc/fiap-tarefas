import type { ILoginCredentials, ISignupCredentials, IUserResponse } from "types/User";

import { createContext, useContext } from "react";

import { logger } from "services/shared/logger-service";
import { useStatus } from "hooks/useStatus";
import { useAuthService } from "hooks/useAuthService";
import { useAccountService } from "hooks/useAccountService";

const initialContext = {
  isLoggedIn: false,
  handleLogin: (credentials: ILoginCredentials) => {},
  handleRegister: (data: ISignupCredentials) => {},
  user: {} as IUserResponse,
  handleLogout: () => {},
  isLoading: false,
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
  const { setStatusError, setStatusLoading, setStatusSuccess, isLoading } = useStatus();

  const isLoggedIn = Boolean(user.token && user.name && user.email);

  const handleLogin = async (credentials: ILoginCredentials) => {
    try {
      setStatusLoading();
      await authenticate(credentials);
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
  };

  const handleLogout = async () => {
    try {
      setStatusLoading();
      await logout();
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
  };

  const handleRegister = async (data: ISignupCredentials) => {
    try {
      setStatusLoading();
      await signup(data);
      await handleLogin({ login: data.email, password: data.password });
      setStatusSuccess();
    } catch (error) {
      logger("error", "front", `AuthContextProvider.handleRegister error: ${error}`);
      setStatusError();
    }
  };

  return <AuthProvider value={{ isLoading, isLoggedIn, handleLogin, handleLogout, handleRegister, user }}>{children}</AuthProvider>;
};
