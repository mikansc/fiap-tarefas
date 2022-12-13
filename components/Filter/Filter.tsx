import { DateField } from "components";
import { IconButton } from "components/IconButton";
import { SelectField } from "components/SelectField";
import { useIsMobile } from "hooks/useIsMobile";
import styles from "./Filter.module.scss";

export const Filter = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Tarefas</span>
      {isMobile ? MobileViewFilters() : DesktopViewFilters()}
    </div>
  );
};

function MobileViewFilters() {
  return <IconButton iconName="filter" onClick={() => console.log("implementar modal")} />;
}

function DesktopViewFilters() {
  return (
    <div className={styles.dateFilters}>
      <label htmlFor="date-from">Data prevista de conclusão:</label>
      <DateField id="date-from" />
      <label htmlFor="date-to">até:</label>
      <DateField id="date-to" />
      <div className={styles.divider}></div>
      <label htmlFor="status">Status:</label>
      <SelectField
        options={[
          { label: "Ativo", value: 0 },
          { label: "Inativo", value: 1 },
        ]}
      />
    </div>
  );
}
