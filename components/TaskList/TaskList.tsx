import { Task } from "types/Task";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};
