import type { Task } from "types/Task";

import { useEffect } from "react";

import { useForm } from "hooks/useForm";
import { asDateString } from "services/shared/date-service";
import { dateFieldConfig } from "./utils/date-field-config";

import { ModalWrapper } from "./ModalWrapper";
import { Button, DateField, TextField, IconButton } from "components";

import styles from "./EditTaskModal.module.scss";

type EditTaskModalProps = {
  open: boolean;
  task?: Task;
  onCancel: () => void;
  onDelete: (task: Task) => void;
  onSave: (task: Task) => void;
};

export const EditTaskModal = ({ open, onCancel, onDelete, onSave, task }: EditTaskModalProps) => {
  const { setValues, registerField, formValues, clearForm } = useForm<Task>();
  const isEditing = !!task;

  useEffect(() => {
    if (isEditing) setValues({ ...task, finishDate: asDateString(task.finishDate!), finishPrevisionDate: asDateString(task.finishPrevisionDate) });
  }, [isEditing, setValues, task]);

  const handleCancelOperation = () => {
    clearForm();
    onCancel();
  };

  const renderCloseButton = () => {
    return isEditing ? <IconButton iconName="close" onClick={handleCancelOperation} /> : null;
  };

  const renderSecondaryActionButton = () => {
    return isEditing ? (
      <Button variant="text" onClick={() => onDelete(task)}>
        Excluir tarefa
      </Button>
    ) : (
      <Button variant="text" onClick={handleCancelOperation}>
        Cancelar
      </Button>
    );
  };

  const renderDateField = () => {
    return isEditing ? (
      <DateField {...registerField("finishDate", dateFieldConfig)} label="Data de conclusão" fullWidth />
    ) : (
      <DateField {...registerField("finishPrevisionDate", dateFieldConfig)} label="Data prevista para conclusão" fullWidth />
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
