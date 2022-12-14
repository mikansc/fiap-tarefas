import { useCallback, useEffect, useState } from "react";
import { tasksService } from "services/frontend/tasks-service";
import { Task } from "types/Task";

export const useFetchTasks = () => {
  const [tasks, setTasks] = useState([] as Task[]);

  const fetchTasks = useCallback(async () => {
    return await tasksService.getAll();
  }, []);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, [fetchTasks]);

  return { tasks, fetchTasks };
};
