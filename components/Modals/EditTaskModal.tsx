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
  const { setValues, registerField, formValues, clearForm } = useForm<Task>();
  const isEditing = !!task;

  useEffect(() => {
    if (isEditing) setValues(task);
    return () => clearForm();
  }, [isEditing, setValues, task, clearForm]);

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

  const renderDateField = () => {
    return isEditing ? (
      <DateField {...registerField("finishDate")} label="Data de conclusão" fullWidth value={asDateString(formValues["finishDate"] || "")} />
    ) : (
      <DateField
        {...registerField("finishPrevisionDate")}
        label="Data prevista para conclusão"
        fullWidth
        value={asDateString(formValues["finishDate"] || "")}
      />
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
        {renderDateField()}
        <div className={styles.actionGroup}>
          <Button onClick={() => onSave(formValues as Task)}>Salvar alterações</Button>
          {renderSecondaryActionButton()}
        </div>
      </div>
    </ModalWrapper>
  );
};
