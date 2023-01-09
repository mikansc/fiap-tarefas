import type { ISignupCredentials } from "types/User";

import { useCallback } from "react";

import { accountService } from "services/frontend/account-http-service";
import { logger } from "services/shared/logger-service";

export const useAccountService = () => {
  const signup = useCallback(async (data: ISignupCredentials) => {
    try {
      await accountService.signup(data);
    } catch (error) {
      logger("error", "front", `useAccountService.signup error: ${error}`);
    }
  }, []);

  return { signup };
};
