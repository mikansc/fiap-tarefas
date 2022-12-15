import { Button } from "components/Button";
import { DateField } from "components/DateField";
import { TextField } from "components/TextField";
import { ModalWrapper } from "components/ModalWrapper";

import styles from "./EditTaskModal.module.scss";
import { useTasks } from "contexts/tasksContext";

type EditTaskModalProps = {
  open: boolean;
  isEditing: boolean;
  onCancel: () => void;
};

export const EditTaskModal = ({ open, isEditing, onCancel }: EditTaskModalProps) => {
  const { deleteTask } = useTasks();

  return (
    <ModalWrapper open={open}>
      <h2 className={styles.title}>{isEditing ? "Editar" : "Nova"} tarefa</h2>
      <TextField label="Título da tarefa" variant="outlined" fullWidth placeholder="Título da tarefa" id="titulo-tarefa" />
      <DateField label="Data de conclusão" fullWidth />
      <div className={styles.actionGroup}>
        <Button onClick={() => console.log("salvar")}>Salvar alterações</Button>
        {isEditing ? (
          <Button variant="text" onClick={deleteTask}>
            Excluir tarefa
          </Button>
        ) : (
          <Button variant="text" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </ModalWrapper>
  );
};
