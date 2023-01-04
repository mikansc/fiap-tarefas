import type { FetchTasksQuery } from "hooks/useTaskService";

import { useForm } from "hooks/useForm";
import { dateFieldConfig } from "../Filter/utils/date-field-config";

import { ModalWrapper } from "./ModalWrapper";
import { SelectField, Button, DateField } from "components";

import styles from "./FilterModal.module.scss";

type FilterModalProps = {
  open: boolean;
  onCancel: () => void;
  onApply: (filters: FetchTasksQuery) => void;
};

const selectOptions = [
  { label: "Todas", value: 0 },
  { label: "Não finalizadas", value: 1 },
  { label: "Finalizadas", value: 2 },
];

export const FilterModal = ({ open, onCancel, onApply }: FilterModalProps) => {
  const { formValues, registerField, clearForm } = useForm<FetchTasksQuery>();

  const handleOnApplyFilters = () => {
    onApply({
      finalDate: formValues["finalDate"] as string,
      startDate: formValues["startDate"] as string,
      status: formValues["status"] as string,
    });
    clearForm();
    onCancel();
  };

  return (
    <ModalWrapper open={open}>
      <div role="dialog" aria-labelledby="filter_modal_title">
        <h2 id="filter_modal_title" className={styles.title}>
          Filtrar tarefas
        </h2>
        <DateField {...registerField("startDate", dateFieldConfig)} label="Data de conclusão inicial" fullWidth />
        <DateField {...registerField("finalDate", dateFieldConfig)} label="Data de conclusão final" fullWidth />
        <SelectField {...registerField("status")} label="Status" fullWidth options={selectOptions} />
        <div className={styles.actionGroup}>
          <Button onClick={handleOnApplyFilters}>Aplicar filtros</Button>
          <Button variant="text" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};
