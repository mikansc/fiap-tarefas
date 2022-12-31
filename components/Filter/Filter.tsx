import { useIsMobile } from "hooks/useIsMobile";
import { MobileViewFilters } from "./components/MobileViewFilters";
import { DesktopViewFilters } from "./components/DesktopViewFilters";

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
