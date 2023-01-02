import type { FetchTasksQuery } from "hooks/useTaskService";

import { useEffect } from "react";

import { useForm } from "hooks/useForm";
import { useTasks } from "contexts/tasksContext";

import { DateField, Label, SelectField } from "components";

import styles from "./Filter.module.scss";

const selectOptions = [
  { label: "Todas", value: 0 },
  { label: "Não finalizadas", value: 1 },
  { label: "Finalizadas", value: 2 },
];

export function DesktopViewFilters() {
  const { registerField, formValues } = useForm<FetchTasksQuery>();
  const { loadTasks } = useTasks();

  useEffect(() => {
    const finalDate = formValues["finalDate"] as string;
    const startDate = formValues["startDate"] as string;
    const status = formValues["status"] as string;

    // Para que o efeito não dispare na primeira renderização
    if (finalDate || startDate || status) {
      loadTasks({ finalDate, startDate, status });
    }
  }, [formValues, loadTasks]);

  const dateFieldConfig = { change: false, blur: true };

  return (
    <div className={styles.dateFilters}>
      <Label htmlFor="date-from">Data prevista de conclusão:</Label>
      <DateField {...registerField("startDate", dateFieldConfig)} id="date-from" />
      <Label htmlFor="date-to">até:</Label>
      <DateField {...registerField("finalDate", dateFieldConfig)} id="date-to" />
      <div className={styles.divider}></div>
      <Label htmlFor="status">Status:</Label>
      <SelectField {...registerField("status")} id="status" options={selectOptions} />
    </div>
  );
}
