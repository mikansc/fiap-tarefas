import { useForm } from "hooks/useForm";
import { FetchTasksProps } from "hooks/useFetchTasks";

import { ModalWrapper } from "./ModalWrapper";
import { SelectField, Button, DateField } from "components";

import styles from "./FilterModal.module.scss";

type FilterModalProps = {
  open: boolean;
  onCancel: () => void;
  onApply: (filters: FetchTasksProps) => void;
};

const selectOptions = [
  { label: "Todas", value: 0 },
  { label: "Não finalizadas", value: 1 },
  { label: "Finalizadas", value: 2 },
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
