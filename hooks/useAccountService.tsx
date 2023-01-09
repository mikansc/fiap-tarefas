import type { ISignupCredentials } from "types/User";

import { useCallback } from "react";

import { accountService } from "services/frontend/account-http-service";

export const useAccountService = () => {
  const signup = useCallback(async (data: ISignupCredentials) => {
    try {
      await accountService.signup(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { signup };
};
