import type { Task } from "types/Task";

import { ModalWrapper } from "./ModalWrapper";
import { Button, DateField, TextField, IconButton } from "components";

import styles from "./EditTaskModal.module.scss";

type EditTaskModalProps = {
  open: boolean;
  task?: Task;
  onCancel: () => void;
  onDelete: () => void;
  onSave: () => void;
};

export const EditTaskModal = ({ open, onCancel, onDelete, onSave, task }: EditTaskModalProps) => {
  const isEditing = !!task;

  const renderCloseButton = () => {
    return isEditing ? <IconButton iconName="close" onClick={onCancel} /> : null;
  };

  const renderSecondaryActionButton = () => {
    return isEditing ? (
      <Button variant="text" onClick={onDelete}>
        Excluir tarefa
      </Button>
    ) : (
      <Button variant="text" onClick={onCancel}>
        Cancelar
      </Button>
    );
  };

  return (
    <ModalWrapper open={open}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{isEditing ? "Editar" : "Nova"} tarefa</h2>
        <div className={styles.closeBtn}>{renderCloseButton()}</div>
        <TextField label="Título da tarefa" variant="outlined" fullWidth placeholder="Título da tarefa" id="titulo-tarefa" />
        <DateField label="Data de conclusão" fullWidth />
        <div className={styles.actionGroup}>
          <Button onClick={onSave}>Salvar alterações</Button>
          {renderSecondaryActionButton()}
        </div>
      </div>
    </ModalWrapper>
  );
};
