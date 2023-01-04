import { FetchTasksQuery } from "hooks/useTaskService";
import { Task } from "types/Task";

export interface EditTaskModalProps {
  open: boolean;
  task?: Task;
  onCancel: () => void;
  onDelete: (task: Task) => void;
  onSave: (task: Task) => void;
}

export interface FilterModalProps {
  open: boolean;
  onCancel: () => void;
  onApply: (filters: FetchTasksQuery) => void;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}
