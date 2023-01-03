import type { Task } from "types/Task";

import { useCallback, useEffect, useState } from "react";

import { tasksService } from "services/frontend/tasks-http-service";

export type FetchTasksQuery = {
  startDate: string;
  finalDate: string;
  status: string;
};

export const useTaskService = () => {
  const [tasks, setTasks] = useState([] as Task[]);

  const getAll = useCallback(async (queries: FetchTasksQuery) => {
    const { startDate, finalDate, status } = queries;

    let query = "?";
    if (startDate) {
      query += `finishPrevisionDateStart=${startDate}&`;
    }
    if (finalDate) {
      query += `finishPrevisionDateEnd=${finalDate}&`;
    }
    if (status) {
      query += `status=${status}`;
    }
    try {
      const tasks = await tasksService.getAll(query);
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const create = useCallback(
    async (task: Task) => {
      try {
        await tasksService.create(task);
        getAll({} as FetchTasksQuery);
      } catch (error) {
        console.log(error);
      }
    },
    [getAll]
  );

  const update = useCallback(
    async (task: Task) => {
      try {
        await tasksService.update(task);
        getAll({} as FetchTasksQuery);
      } catch (error) {
        console.log(error);
      }
    },
    [getAll]
  );

  const remove = useCallback(
    async (task: Task) => {
      try {
        await tasksService.delete(task);
        getAll({} as FetchTasksQuery);
      } catch (error) {
        console.log(error);
      }
    },
    [getAll]
  );

  useEffect(() => {
    getAll({} as FetchTasksQuery);
  }, [getAll]);

  return { tasks, getAll, update, create, remove };
};

// ?finishPrevisionDateStart=&finishPrevisionDateEnd=&status=
