import type { Task } from "types/Task";
import DoneIcon from "./components/DoneIcon";
import UndoneIcon from "./components/UndoneIcon";
import styles from "./TaskItem.module.scss";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("pt-BR");
}

interface TaskProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskProps) => {
  const taskIsDone = !!task.finishDate;

  return (
    <div className={styles.container}>
      <button className={styles.taskAction}>{taskIsDone ? <DoneIcon /> : <UndoneIcon />}</button>
      <div className={styles.taskContent}>
        <span className={`${styles.taskTitle} ${taskIsDone ? styles.taskDone : ""}`}>{task.name}</span>
        {taskIsDone ? (
          <span className={styles.taskDue}>Concluída em: {task.finishPrevisionDate ? formatDate(task.finishPrevisionDate) : "-"}</span>
        ) : (
          <span className={styles.taskDue}>Conclusão em: {task.finishPrevisionDate ? formatDate(task.finishPrevisionDate) : "-"}</span>
        )}
      </div>
    </div>
  );
};
