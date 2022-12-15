import { DateField, FilterModal } from "components";
import { IconButton } from "components/IconButton";
import { SelectField } from "components/SelectField";
import { useIsMobile } from "hooks/useIsMobile";
import { useState } from "react";

import styles from "./Filter.module.scss";

export const Filter = () => {
  const isMobile = useIsMobile();

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
  return (
    <>
      <div className={styles.dateFilters}>
        <label htmlFor="date-from">Data prevista de conclusão:</label>
        <DateField onChange={(e) => console.log(e.target.value)} id="date-from" />
        <label htmlFor="date-to">até:</label>
        <DateField onChange={(e) => console.log(e.target.value)} id="date-to" />
        <div className={styles.divider}></div>
        <label htmlFor="status">Status:</label>
        <SelectField
          onChange={(e) => console.log(e.target.value)}
          options={[
            { label: "Ativo", value: 0 },
            { label: "Inativo", value: 1 },
          ]}
        />
      </div>
    </>
  );
}
