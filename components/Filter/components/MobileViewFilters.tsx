import { useState } from "react";
import { FilterModal, IconButton } from "components";
import { useTasks } from "contexts/tasksContext";

export function MobileViewFilters() {
  const [modalOpened, setModalOpened] = useState(false);
  const { loadTasks } = useTasks();

  // loadTasks({ status: "", finalDate: "", startDate: "" });

  return (
    <>
      <IconButton iconName="filter" onClick={() => setModalOpened(true)} />
      <FilterModal onApply={loadTasks} onCancel={() => setModalOpened(false)} open={modalOpened} />
    </>
  );
}
