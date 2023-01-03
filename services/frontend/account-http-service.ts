import type { ILoginCredentials, ISignupCredentials } from "types/User";

import { HttpFetchClient } from "./http-fetch-client";

const service = (httpClient: HttpFetchClient<ILoginCredentials>) => {
  //
  const signin = async (data: ILoginCredentials) => {
    try {
      return await httpClient.post("/login", data);
    } catch (error) {
      throw error;
    }
  };

  const signup = async (data: ISignupCredentials) => {
    try {
      return await httpClient.post("/register", data);
    } catch (error) {
      throw error;
    }
  };

  return {
    signin,
    signup,
  };
};

export const accountService = service(new HttpFetchClient());
