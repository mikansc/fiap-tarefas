import type { ILoginCredentials, ISignupCredentials } from "types/User";

import { HttpFetchClient } from "./http-fetch-client";

const service = (httpClient: HttpFetchClient<ISignupCredentials>) => {
  //

  const signup = async (data: ISignupCredentials) => {
    try {
      return await httpClient.post("/register", data);
    } catch (error) {
      throw error;
    }
  };

  return {
    signup,
  };
};

export const accountService = service(new HttpFetchClient());
