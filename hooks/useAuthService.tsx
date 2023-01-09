import type { ILoginCredentials, IUserResponse } from "types/User";

import { useState, useCallback, useEffect } from "react";

import { authService } from "services/frontend/auth-http-service";
import { clearStorage, getFromStorage, setToStorage } from "services/frontend/storage-service";

export const useAuthService = () => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);

  useEffect(() => {
    const userFromStorage = getFromStorage<IUserResponse>("usr");
    if (userFromStorage) setUser(userFromStorage);
  }, []);

  const authenticate = useCallback(async (credentials: ILoginCredentials) => {
    try {
      const response = await authService.signin(credentials);
      setToStorage("usr", response);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = () => {
    clearStorage();
    setUser({} as IUserResponse);
  };

  return {
    user,
    authenticate,
    logout,
  };
};
