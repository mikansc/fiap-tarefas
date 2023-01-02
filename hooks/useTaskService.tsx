import type { Task } from "types/Task";

import { useCallback, useEffect, useState } from "react";

import { tasksService } from "services/frontend/tasks-http-service";

export type FetchTasksProps = {
  startDate: string;
  finalDate: string;
  status: string;
};

export const useTaskService = () => {
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

  const updateTask = useCallback(
    async (task: Task) => {
      try {
        await tasksService.update(task);
        fetchTasks({} as FetchTasksProps);
      } catch (error) {
        console.log(error);
      }
    },
    [fetchTasks]
  );

  useEffect(() => {
    fetchTasks({} as FetchTasksProps);
  }, [fetchTasks]);

  return { tasks, fetchTasks, updateTask };
};

// ?finishPrevisionDateStart=&finishPrevisionDateEnd=&status=
