import type { ILoginCredentials, ISignupCredentials, IUserResponse } from "types/User";

import { createContext, useContext } from "react";

import { useAuthService } from "hooks/useAuthService";
import { accountService } from "services/frontend/account-http-service";
import { useAccountService } from "hooks/useAccountService";

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

  const isLoggedIn = Boolean(user.token && user.name && user.email);

  const handleLogin = async (credentials: ILoginCredentials) => {
    await authenticate(credentials);
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleRegister = async (data: ISignupCredentials) => {
    try {
      await signup(data);
      await handleLogin({ login: data.email, password: data.password });
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthProvider value={{ isLoggedIn, handleLogin, handleLogout, handleRegister, user }}>{children}</AuthProvider>;
};
