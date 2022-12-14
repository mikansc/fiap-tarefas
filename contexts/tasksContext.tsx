import { useFetchTasks } from "hooks/useFetchTasks";
import { createContext, useContext } from "react";
import type { Task } from "types/Task";

type initialContext = {
  tasks: Task[];
  completeTask: (task: Task) => void;
  updateTask: (task: Task) => void;
};

const taskContext = createContext({} as initialContext);
const TaskProvider = taskContext.Provider;

export const useTasks = () => {
  const ctx = useContext(taskContext);
  return ctx;
};

export const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks } = useFetchTasks();

  const completeTask = (task: Task) => {};
  const updateTask = (task: Task) => {};

  return <TaskProvider value={{ tasks, updateTask, completeTask }}>{children} </TaskProvider>;
};
