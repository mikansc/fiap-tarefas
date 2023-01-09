import type { ReactNode } from "react";
import type { ILoginCredentials, ISignupCredentials, IUserResponse } from "types/User";

import { createContext, useContext, useEffect, useState } from "react";

import { authService } from "services/frontend/auth-http-service";
import { accountService } from "services/frontend/account-http-service";
import { clearStorage, getFromStorage, setToStorage } from "services/frontend/storage-service";

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

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);

  const isLoggedIn = Boolean(user.token && user.name && user.email);

  useEffect(() => {
    const userFromStorage = getFromStorage<IUserResponse>("usr");
    if (userFromStorage) setUser(userFromStorage);
  }, []);

  const handleLogin = async (credentials: ILoginCredentials) => {
    try {
      const response = await authService.signin(credentials);
      setToStorage("usr", response);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (data: ISignupCredentials) => {
    try {
      await accountService.signup(data);
      await handleLogin({ login: data.email, password: data.password });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    clearStorage();
    setUser({} as IUserResponse);
  };

  return <AuthProvider value={{ isLoggedIn, handleLogin, handleLogout, handleRegister, user }}>{children}</AuthProvider>;
};
