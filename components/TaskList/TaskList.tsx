import type { TaskListProps } from "./TaskList.types";

import { useTasks } from "contexts/tasksContext";
import { TaskItem } from "./TaskItem";

import styles from "./TaskList.module.scss";

export const TaskList = ({ tasks }: TaskListProps) => {
  const { selectTask, selectedTask } = useTasks();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tasks.map((task) => {
          const isSelected = task._id === selectedTask?._id;
          return <TaskItem key={task._id} task={task} seleted={isSelected} onClick={() => selectTask(task)} />;
        })}
      </ul>
    </div>
  );
};
