import { Task } from "types/Task";

export interface TaskListProps {
  tasks: Task[];
}

export interface TaskItemProps {
  task: Task;
  onClick: () => void;
  seleted: boolean;
}
