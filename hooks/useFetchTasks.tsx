import type { Task } from "types/Task";

import { useCallback, useEffect, useState } from "react";

import { tasksService } from "services/frontend/tasks-http-service";

export type FetchTasksProps = {
  startDate: string;
  finalDate: string;
  status: number;
};

export const useFetchTasks = () => {
  const [tasks, setTasks] = useState([] as Task[]);

  const fetchTasks = useCallback(async (props: FetchTasksProps) => {
    const { startDate, finalDate, status } = props;

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

  useEffect(() => {
    fetchTasks({} as FetchTasksProps);
  }, [fetchTasks]);

  return { tasks, fetchTasks };
};

// ?finishPrevisionDateStart=&finishPrevisionDateEnd=&status=
