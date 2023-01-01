import { ButtonHTMLAttributes } from "react";

import { AddIcon } from "./components/AddIcon";

import styles from "./AddButton.module.scss";

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const AddButton = (props: AddButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} {...props}>
        <AddIcon />
        Adicionar uma tarefa
      </button>
    </div>
  );
};
