import type { Task } from "types/Task";
import type { FetchTasksQuery } from "hooks/useTaskService";

import { createContext, useCallback, useContext, useState } from "react";

import { useTaskService } from "hooks/useTaskService";
import { useStatus } from "hooks/useStatus";
import { logger } from "services/shared/logger-service";

type initialContext = {
  tasks: Task[];
  selectedTask?: Task;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  selectTask: (task?: Task) => void;
  loadTasks: (queryConfig: FetchTasksQuery) => void;
  clearSelected: (task?: Task) => void;
  isLoading: boolean;
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
  const { isLoading, setStatusError, setStatusLoading, setStatusSuccess } = useStatus();

  const loadTasks = (queryConfig: FetchTasksQuery) => {
    try {
      setStatusLoading;
      getAll(queryConfig);
      clearSelected();
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
  };
  const updateTask = (task: Task) => {
    try {
      setStatusLoading;
      update(task);
      clearSelected();
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
  };

  const createTask = (task: Task) => {
    try {
      setStatusLoading;
      create(task);
      clearSelected();
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
  };

  const deleteTask = (task: Task) => {
    try {
      setStatusLoading;
      remove(task);
      clearSelected();
      setStatusSuccess();
    } catch (error) {
      setStatusError();
    }
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
    <TaskProvider value={{ isLoading, tasks, selectedTask, updateTask, createTask, deleteTask, loadTasks, selectTask, clearSelected }}>
      {children}
    </TaskProvider>
  );
};
