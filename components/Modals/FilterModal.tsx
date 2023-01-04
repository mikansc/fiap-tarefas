import type { FetchTasksQuery } from "hooks/useTaskService";
import type { FilterModalProps } from "./Modals.types";

import { useForm } from "hooks/useForm";
import { selectOptions } from "components/Filter/utils/filter-select-options";
import { dateFieldConfig } from "../Filter/utils/date-field-config";

import { ModalWrapper } from "./ModalWrapper";
import { SelectField, Button, DateField } from "components";

import styles from "./FilterModal.module.scss";

export const FilterModal = ({ open, onCancel, onApply }: FilterModalProps) => {
  const { formValues, registerField, clearForm } = useForm<FetchTasksQuery>();

  const handleOnApplyFilters = () => {
    const finalDate = formValues["finalDate"] as string;
    const startDate = formValues["startDate"] as string;
    const status = formValues["status"] as string;

    onApply({ finalDate, startDate, status });
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
