import { AddButton, Filter, FooterBar, NavBar, NoContent, TaskList } from "components";
import { EditTaskModal } from "components/EditTaskModal/EditTaskModal";
import { useTasks } from "contexts/tasksContext";

import { NextPage } from "next";
import { useState } from "react";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { tasks, selectedTask } = useTasks();
  const [opened, setOpened] = useState(false);

  const editMode = !!selectedTask;
  const isOpened = opened || !!selectedTask;

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          {tasks.length == 0 && <NoContent />}
          {tasks.length > 0 && <TaskList tasks={tasks} />}
        </div>
        <AddButton onClick={() => setOpened(true)} />
      </div>
      <FooterBar />
      <EditTaskModal isEditing={editMode} open={isOpened} onCancel={() => setOpened(false)} />
    </>
  );
};
