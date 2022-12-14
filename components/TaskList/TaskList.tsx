import { useState } from "react";
import { Task } from "types/Task";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const [selectedId, setSelectedId] = useState("");

  const handleSelect = (id: string) => {
    if (selectedId === id) {
      setSelectedId("");
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskItem seleted={task._id === selectedId} onClick={() => handleSelect(task._id)} key={task._id} task={task} />
      ))}
    </div>
  );
};
