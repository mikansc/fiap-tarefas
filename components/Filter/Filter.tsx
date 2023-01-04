import { useIsMobile } from "hooks/useIsMobile";

import { MobileViewFilters } from "./MobileViewFilters";
import { DesktopViewFilters } from "./DesktopViewFilters";

import styles from "./Filter.module.scss";

export const Filter = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <span className={styles.title}>Tarefas</span>
      {isMobile ? <MobileViewFilters /> : <DesktopViewFilters />}
    </section>
  );
};
