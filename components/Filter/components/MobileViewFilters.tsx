import { useState } from "react";
import { IconButton } from "components";
import { useTasks } from "contexts/tasksContext";
import { FilterModal } from "./FilterModal";

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
