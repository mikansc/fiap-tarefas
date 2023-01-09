import { useState } from "react";
import { useTasks } from "contexts/tasksContext";

import { FilterModal, IconButton } from "components";

export function MobileViewFilters() {
  const [modalOpened, setModalOpened] = useState(false);
  const { loadTasks, isLoading } = useTasks();

  return (
    <>
      <IconButton disabled={isLoading} iconName="filter" onClick={() => setModalOpened(true)} />
      <FilterModal onApply={loadTasks} onCancel={() => setModalOpened(false)} open={modalOpened} />
    </>
  );
}
