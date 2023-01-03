import type { ILoginCredentials } from "types/User";

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

  return {
    signin,
  };
};

export const loginService = service(new HttpFetchClient());
