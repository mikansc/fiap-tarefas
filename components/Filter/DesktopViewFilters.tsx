import type { FetchTasksQuery } from "hooks/useTaskService";

import { useEffect } from "react";

import { useForm } from "hooks/useForm";
import { useTasks } from "contexts/tasksContext";
import { selectOptions } from "./utils/filter-select-options";
import { dateFieldConfig } from "components/Filter/utils/date-field-config";

import { DateField, Label, SelectField } from "components";

import styles from "./Filter.module.scss";

export function DesktopViewFilters() {
  const { registerField, formValues } = useForm<FetchTasksQuery>();
  const { loadTasks } = useTasks();

  useEffect(() => {
    const finalDate = formValues["finalDate"] as string;
    const startDate = formValues["startDate"] as string;
    const status = formValues["status"] as string;

    // Este useEffect busca os dados quando os filtros são alterados.
    // O trecho abaixo é para que o efeito não dispare na primeira renderização.
    if (finalDate || startDate || status) {
      loadTasks({ finalDate, startDate, status });
    }
  }, [formValues, loadTasks]);

  return (
    <div className={styles.dateFilters}>
      <Label htmlFor="date-from">Data prevista de conclusão:</Label>
      <DateField {...registerField("startDate", dateFieldConfig)} id="date-from" />
      <Label htmlFor="date-to">até:</Label>
      <DateField {...registerField("finalDate", dateFieldConfig)} id="date-to" />
      <div className={styles.divider} role="separator"></div>
      <Label htmlFor="status">Status:</Label>
      <SelectField {...registerField("status")} id="status" options={selectOptions} />
    </div>
  );
}
