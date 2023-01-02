import { Task } from "types/Task";
import type { ILoginCredentials } from "types/User";
import { HttpFetchClient } from "./http-fetch-client";

const service = (httpClient: HttpFetchClient<Task>) => {
  //
  const getAll = async (query: string): Promise<Task[]> => {
    try {
      return await httpClient.get("/task".concat(query || ""));
    } catch (error) {
      throw error;
    }
  };

  const create = async (task: Task): Promise<Task> => {
    try {
      return await httpClient.post("/task", task);
    } catch (error) {
      throw error;
    }
  };

  const update = async (task: Task): Promise<Task> => {
    try {
      return await httpClient.put("/task".concat(`?id=${task._id}`), task);
    } catch (error) {
      throw error;
    }
  };

  const del = async (task: Task): Promise<Task> => {
    try {
      return await httpClient.put("/task".concat(`?id=${task._id}`), task);
    } catch (error) {
      throw error;
    }
  };

  return {
    getAll,
    create,
    update,
    delete: del,
  };
};

export const tasksService = service(new HttpFetchClient());
