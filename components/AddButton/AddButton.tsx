import { ButtonHTMLAttributes } from "react";

import styles from "./AddButton.module.scss";
import { AddIcon } from "./AddIcon";

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
