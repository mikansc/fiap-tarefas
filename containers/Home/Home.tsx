import { useState } from "react";
import { NextPage } from "next";

import { useTasks } from "contexts/tasksContext";

import { AddButton, EditTaskModal, Filter, FooterBar, NavBar, NoContent, TaskList } from "components";

import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { tasks, selectedTask, deleteTask, clearSelected } = useTasks();

  const [opened, setOpened] = useState(false);

  const handleCancel = () => {
    clearSelected();
    setOpened(false);
  };

  const handleDelete = () => {
    if (window.confirm("Você quer mesmo deletar a tarefa?")) {
      deleteTask(); // TODO
    }
  };
  const handleSave = () => {
    console.log("Tarefa atualizada");
    setOpened(false);
  };

  const isOpened = opened || !!selectedTask;

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Filter />
        <div className={styles.tasks}>
          {tasks.length == 0 && <NoContent />}
          {tasks.length > 0 && <TaskList tasks={tasks} />}
        </div>
        <AddButton onClick={() => setOpened(true)} />
      </div>
      <FooterBar />
      <EditTaskModal task={selectedTask} open={isOpened} onCancel={handleCancel} onDelete={handleDelete} onSave={handleSave} />
    </>
  );
};
