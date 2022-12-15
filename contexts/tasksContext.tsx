import { FetchTasksProps, useFetchTasks } from "hooks/useFetchTasks";
import { createContext, useContext, useState } from "react";
import type { Task } from "types/Task";

type initialContext = {
  tasks: Task[];
  selectedTask: Task | null;
  completeTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  loadTasks: (filter: FetchTasksProps) => void;
  handleSelectTask: (task: Task | null) => void;
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
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const loadTasks = (filter: FetchTasksProps) => {
    fetchTasks(filter);
  };

  const completeTask = (task: Task) => {};

  const updateTask = (task: Task) => {};

  const deleteTask = () => {
    if (window.confirm("Você quer mesmo deletar a tarefa?")) {
      setSelectedTask(null); // TODO
    }
  };

  const handleSelectTask = (task: Task | null) => {
    if (task && (!selectedTask || selectedTask._id !== task._id)) {
      setSelectedTask(task);
    } else {
      setSelectedTask(null);
    }
  };

  return <TaskProvider value={{ tasks, selectedTask, updateTask, completeTask, deleteTask, loadTasks, handleSelectTask }}>{children} </TaskProvider>;
};
