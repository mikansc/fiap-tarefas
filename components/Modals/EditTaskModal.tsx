import type { EditTaskModalProps } from "./Modals.types";
import type { Task } from "types/Task";

import { useEffect } from "react";

import { useForm } from "hooks/useForm";
import { asIsoDateString } from "services/shared/date-service";
import { dateFieldConfig } from "../Filter/utils/date-field-config";

import { ModalWrapper } from "./ModalWrapper";
import { Button, DateField, TextField, IconButton } from "components";

import styles from "./EditTaskModal.module.scss";

export const EditTaskModal = ({ open, onCancel, onDelete, onSave, task }: EditTaskModalProps) => {
  const { setValues, registerField, formValues, clearForm } = useForm<Task>();

  const isEditing = !!task;

  useEffect(() => {
    if (!open) clearForm();
  }, [open, clearForm]);

  useEffect(() => {
    if (isEditing) {
      const finishDate = asIsoDateString(task.finishDate || "");
      const finishPrevisionDate = asIsoDateString(task.finishPrevisionDate);
      setValues({ ...task, finishDate, finishPrevisionDate });
    }
  }, [isEditing, setValues, task]);

  const handleCancelOperation = () => {
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
      <div className={styles.modalContent} role="dialog" aria-labelledby="edit_modal_title">
        <h2 id="edit_modal_title" className={styles.title}>
          {isEditing ? "Editar" : "Nova"} tarefa
        </h2>
        <div className={styles.closeBtn}>{renderCloseButton()}</div>
        <TextField {...registerField("name")} label="Título da tarefa" variant="outlined" fullWidth placeholder="Título da tarefa" />
        {renderDateField()}
        <div className={styles.actionGroup}>
          <Button onClick={() => onSave(formValues as Task)}>Salvar alterações</Button>
          {renderSecondaryActionButton()}
        </div>
      </div>
    </ModalWrapper>
  );
};
