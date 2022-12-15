import { useCallback, useEffect, useState } from "react";
import { tasksService } from "services/frontend/tasks-service";
import { Task } from "types/Task";

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
      query.concat(`finishPrevisionDateStart=${startDate}&`);
    }
    if (startDate) {
      query.concat(`finishPrevisionDateEnd=${finalDate}&`);
    }
    if (startDate) {
      query.concat(`status=${status}`);
    }

    return await tasksService.getAll();
  }, []);

  useEffect(() => {
    fetchTasks({} as FetchTasksProps).then(setTasks);
  }, [fetchTasks]);

  return { tasks, fetchTasks };
};

// ?finishPrevisionDateStart=&finishPrevisionDateEnd=&status=
