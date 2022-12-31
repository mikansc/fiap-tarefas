import { FetchTasksProps, useFetchTasks } from "hooks/useFetchTasks";
import { createContext, useContext, useState } from "react";
import type { Task } from "types/Task";

type initialContext = {
  tasks: Task[];
  selectedTask?: Task;
  completeTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  loadTasks: (filter: FetchTasksProps) => void;
  selectTask: (task?: Task) => void;
  clearSelected: (task?: Task) => void;
  deleteTask: () => void;
};

const taskContext = createContext({} as initialContext);
const TaskProvider = taskContext.Provider;

export const useTasks = () => {
  const ctx = useContext(taskContext);
  return ctx;
};

export const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks, fetchTasks } = useFetchTasks();
  const [selectedTask, setSelectedTask] = useState<Task>();

  const loadTasks = (filter: FetchTasksProps) => {
    console.log(filter);

    // fetchTasks(filter);
  };

  const completeTask = (task: Task) => {};

  const updateTask = (task: Task) => {};

  const deleteTask = () => {
    setSelectedTask(undefined); // TODO Implementar deleção
  };

  const selectTask = (task?: Task) => {
    if (task && (!selectedTask || selectedTask._id !== task._id)) {
      setSelectedTask(task);
    } else {
      clearSelected();
    }
  };

  const clearSelected = () => {
    setSelectedTask(undefined);
  };

  return (
    <TaskProvider value={{ tasks, selectedTask, updateTask, completeTask, deleteTask, loadTasks, selectTask, clearSelected }}>
      {children}{" "}
    </TaskProvider>
  );
};
