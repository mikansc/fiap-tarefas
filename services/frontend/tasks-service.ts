import { Task } from "types/Task";
import type { ILoginCredentials } from "types/User";
import { HttpFetchClient } from "./http-fetch-client";

const service = (httpClient: HttpFetchClient) => {
  //
  const getAll = async (): Promise<Task[]> => {
    try {
      return await httpClient.get("/task");
    } catch (error) {
      throw error;
    }
  };

  return {
    getAll,
  };
};

export const tasksService = service(new HttpFetchClient());
