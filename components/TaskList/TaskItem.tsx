import type { Task } from "types/Task";
import DoneIcon from "./components/DoneIcon";
import UndoneIcon from "./components/UndoneIcon";
import styles from "./TaskItem.module.scss";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("pt-BR");
}

interface TaskProps {
  task: Task;
  onClick: () => void;
  seleted: boolean;
}

export const TaskItem = ({ task, onClick, seleted }: TaskProps) => {
  const taskIsDone = !!task.finishDate;
  return (
    <li className={`${styles.container} ${seleted ? styles.selected : ""}`} onClick={onClick}>
      <div className={styles.taskAction}>{taskIsDone ? <DoneIcon /> : <UndoneIcon />}</div>
      <div className={styles.taskContent}>
        <span className={`${styles.taskTitle} ${taskIsDone ? styles.taskDone : ""}`}>{task.name}</span>
        {taskIsDone ? (
          <span className={styles.taskDue}>Concluída em: {task.finishDate ? formatDate(task.finishDate) : "-"}</span>
        ) : (
          <span className={styles.taskDue}>Conclusão em: {task.finishPrevisionDate ? formatDate(task.finishPrevisionDate) : "-"}</span>
        )}
      </div>
    </li>
  );
};
