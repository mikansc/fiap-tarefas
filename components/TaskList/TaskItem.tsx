import type { TaskItemProps } from "./TaskList.types";

import { asLocaleDateString } from "services/shared/date-service";

import styles from "./TaskItem.module.scss";

import { DoneIcon, UndoneIcon } from "components";

export const TaskItem = (props: TaskItemProps) => {
  const { task, onClick, seleted } = props;

  const taskIsDone = !!task.finishDate;
  const finishedDate = task.finishDate ? asLocaleDateString(task.finishDate) : "-";
  const dueDate = task.finishPrevisionDate ? asLocaleDateString(task.finishPrevisionDate) : "-";

  return (
    <li className={`${styles.container} ${seleted ? styles.selected : ""}`} onClick={onClick}>
      <div className={`${styles.taskStatus} ${taskIsDone ? styles.taskDone : ""}`}>{taskIsDone ? <DoneIcon /> : <UndoneIcon />}</div>
      <div className={styles.taskContent}>
        <span className={`${styles.taskTitle} ${taskIsDone ? styles.taskDone : ""}`}>{task.name}</span>
        {taskIsDone ? (
          <span className={styles.taskDue}>Concluída em: {finishedDate}</span>
        ) : (
          <span className={styles.taskDue}>Conclusão em: {dueDate}</span>
        )}
      </div>
    </li>
  );
};
