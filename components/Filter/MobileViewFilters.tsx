import { useState } from "react";
import { useTasks } from "contexts/tasksContext";

import { FilterModal, IconButton } from "components";

export function MobileViewFilters() {
  const [modalOpened, setModalOpened] = useState(false);
  const { loadTasks } = useTasks();

  return (
    <>
      <IconButton iconName="filter" onClick={() => setModalOpened(true)} />
      <FilterModal onApply={loadTasks} onCancel={() => setModalOpened(false)} open={modalOpened} />
    </>
  );
}
