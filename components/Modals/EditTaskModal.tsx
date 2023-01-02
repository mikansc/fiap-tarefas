import type { Task } from "types/Task";

import { useEffect } from "react";

import { useForm } from "hooks/useForm";
import { asDateString } from "services/shared/date-service";

import { ModalWrapper } from "./ModalWrapper";
import { Button, DateField, TextField, IconButton } from "components";

import styles from "./EditTaskModal.module.scss";

type EditTaskModalProps = {
  open: boolean;
  task?: Task;
  onCancel: () => void;
  onDelete: () => void;
  onSave: (task: Task) => void;
};

export const EditTaskModal = ({ open, onCancel, onDelete, onSave, task }: EditTaskModalProps) => {
  const { setValues, registerField, formValues } = useForm<Task>();
  const isEditing = !!task;

  useEffect(() => {
    if (isEditing) setValues(task);
  }, [isEditing, setValues, task]);

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
        <TextField
          {...registerField("name")}
          label="Título da tarefa"
          variant="outlined"
          fullWidth
          placeholder="Título da tarefa"
          id="titulo-tarefa"
        />
        <DateField {...registerField("finishDate")} label="Data de conclusão" fullWidth value={asDateString(formValues["finishDate"] || "")} />
        <div className={styles.actionGroup}>
          <Button onClick={() => onSave(formValues as Task)}>Salvar alterações</Button>
          {renderSecondaryActionButton()}
        </div>
      </div>
    </ModalWrapper>
  );
};
