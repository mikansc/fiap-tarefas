import type { Task } from "types/Task";
import type { FetchTasksQuery } from "hooks/useTaskService";

import { createContext, useCallback, useContext, useState } from "react";

import { useTaskService } from "hooks/useTaskService";

type initialContext = {
  tasks: Task[];
  selectedTask?: Task;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  selectTask: (task?: Task) => void;
  loadTasks: (queryConfig: FetchTasksQuery) => void;
  clearSelected: (task?: Task) => void;
};

const taskContext = createContext({} as initialContext);
const TaskProvider = taskContext.Provider;

export const useTasks = () => {
  const ctx = useContext(taskContext);
  return ctx;
};

export const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks, getAll, update, create, remove } = useTaskService();
  const [selectedTask, setSelectedTask] = useState<Task>(); // TODO Implementar teste automatizado para garantir valor vazio quando necessario

  const loadTasks = useCallback(
    (queryConfig: FetchTasksQuery) => {
      getAll(queryConfig);
      clearSelected();
    },
    [getAll]
  );

  const updateTask = (task: Task) => {
    update(task);
    clearSelected();
  };

  const createTask = (task: Task) => {
    create(task);
    clearSelected();
  };

  const deleteTask = (task: Task) => {
    remove(task);
    clearSelected();
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
    <TaskProvider value={{ tasks, selectedTask, updateTask, createTask, deleteTask, loadTasks, selectTask, clearSelected }}>{children} </TaskProvider>
  );
};
