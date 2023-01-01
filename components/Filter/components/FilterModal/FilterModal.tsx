import { Button } from "components/Buttons";
import { DateField } from "components/DateField";
import { ModalWrapper } from "components/ModalWrapper";
import { SelectField } from "components/SelectField";
import { useTasks } from "contexts/tasksContext";
import { FetchTasksProps } from "hooks/useFetchTasks";
import { useForm } from "hooks/useForm";
import { useState } from "react";

import styles from "./FilterModal.module.scss";

type FilterModalProps = {
  open: boolean;
  onCancel: () => void;
  onApply: (filters: FetchTasksProps) => void;
};

const selectOptions = [
  { label: "Ativo", value: 0 },
  { label: "Inativo", value: 1 },
];

export const FilterModal = ({ open, onCancel, onApply }: FilterModalProps) => {
  const { formValues, registerField } = useForm<FetchTasksProps>();

  return (
    <ModalWrapper open={open}>
      <h2 className={styles.title}>Filtrar tarefas</h2>
      <DateField {...registerField("startDate")} label="Data de conclusão inicial" fullWidth />
      <DateField {...registerField("finalDate")} label="Data de conclusão final" fullWidth />
      <SelectField {...registerField("status")} label="Status" fullWidth options={selectOptions} />
      <div className={styles.actionGroup}>
        <Button onClick={() => onApply({ finalDate: formValues["finalDate"], startDate: formValues["startDate"], status: formValues["status"] })}>
          Aplicar filtros
        </Button>
        <Button variant="text" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </ModalWrapper>
  );
};
