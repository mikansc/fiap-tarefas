import { AddButton, Filter, FooterBar, NavBar, NoContent, TaskList } from "components";
import { useTasks } from "contexts/tasksContext";

import { NextPage } from "next";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { tasks } = useTasks();
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          {tasks.length == 0 && <NoContent />}
          {tasks.length > 0 && <TaskList tasks={tasks} />}
        </div>
        <AddButton />
        <FooterBar />
      </div>
    </>
  );
};
