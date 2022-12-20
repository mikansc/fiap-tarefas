import { useState } from "react";

import { useForm } from "hooks/useForm";
import { useTasks } from "contexts/tasksContext";
import { useIsMobile } from "hooks/useIsMobile";

import { DateField, FilterModal, Label, IconButton, SelectField } from "components";

import styles from "./Filter.module.scss";

export const Filter = () => {
  const isMobile = useIsMobile();
  const { loadTasks } = useTasks();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Tarefas</span>
      {isMobile ? <MobileViewFilters /> : <DesktopViewFilters />}
    </div>
  );
};

function MobileViewFilters() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <IconButton iconName="filter" onClick={() => setModalOpened(true)} />
      <FilterModal onCancel={() => setModalOpened(false)} open={modalOpened} />
    </>
  );
}

function DesktopViewFilters() {
  const { registerField, onSubmitForm } = useForm();

  const handleChange = () => {
    onSubmitForm(console.log);
  };

  return (
    <div className={styles.dateFilters}>
      <Label htmlFor="date-from">Data prevista de conclusão:</Label>
      <DateField {...registerField("startDate")} onChange={(e) => console.log(e.target.value)} id="date-from" />
      <Label htmlFor="date-to">até:</Label>
      <DateField {...registerField("finalDate")} onChange={(e) => console.log(e.target.value)} id="date-to" />
      <div className={styles.divider}></div>
      <Label htmlFor="status">Status:</Label>
      <SelectField
        onChange={(e) => console.log(e.target.value)}
        options={[
          { label: "Ativo", value: 0 },
          { label: "Inativo", value: 1 },
        ]}
      />
    </div>
  );
}
