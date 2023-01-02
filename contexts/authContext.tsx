import type { ReactNode } from "react";
import type { ILoginCredentials, IUserResponse } from "types/User";

import { createContext, useContext, useEffect, useState } from "react";

import { loginService } from "services/frontend/login-http-service";
import { clearStorage, getFromStorage, setToStorage } from "services/frontend/storage-service";

const initialContext = {
  isLoggedIn: false,
  handleLogin: (credentials: ILoginCredentials) => {},
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
      const response = await loginService.signin(credentials);
      setToStorage("usr", response);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    clearStorage();
    setUser({} as IUserResponse);
  };

  return <AuthProvider value={{ isLoggedIn, handleLogin, handleLogout, user }}>{children}</AuthProvider>;
};
