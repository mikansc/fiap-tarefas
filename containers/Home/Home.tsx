import type { Task } from "types/Task";

import { useState } from "react";
import { NextPage } from "next";

import { useTasks } from "contexts/tasksContext";

import { AddButton, EditTaskModal, Filter, FooterBar, NavBar, NoContent, TaskList } from "components";

import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { tasks, selectedTask, deleteTask, clearSelected, updateTask, createTask } = useTasks();
  const isEditing = !!selectedTask;

  const [opened, setOpened] = useState(false);

  const handleCancel = () => {
    if (isEditing) clearSelected();
    else setOpened(false);
  };

  const handleDelete = (task: Task) => {
    if (window.confirm("Você quer mesmo deletar a tarefa?")) {
      deleteTask(task);
    }
  };
  const handleSave = (task: Task) => {
    if (isEditing) updateTask(task);
    else {
      createTask(task);
      setOpened(false);
    }
  };

  const isOpened = opened || !!selectedTask;

  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <Filter />
        <section className={styles.tasks}>
          {tasks.length == 0 && <NoContent />}
          {tasks.length > 0 && <TaskList tasks={tasks} />}
        </section>
        <AddButton onClick={() => setOpened(true)} />
      </main>
      <FooterBar />
      <EditTaskModal task={selectedTask} open={isOpened} onCancel={handleCancel} onDelete={handleDelete} onSave={handleSave} />
    </>
  );
};
