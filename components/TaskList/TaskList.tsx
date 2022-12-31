import { useTasks } from "contexts/tasksContext";
import { useState } from "react";
import { Task } from "types/Task";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const { selectTask, selectedTask } = useTasks();

  return (
    <div className={styles.container}>
      {tasks.map((task) => {
        const isSelected = task._id === selectedTask?._id;
        return <TaskItem key={task._id} task={task} seleted={isSelected} onClick={() => selectTask(task)} />;
      })}
    </div>
  );
};
