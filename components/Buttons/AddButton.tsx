import type { AddButtonProps } from "./Buttons.types";

import { AddIcon } from "../Icons/AddIcon";

import styles from "./AddButton.module.scss";

export const AddButton = (props: AddButtonProps) => {
  return (
    <div className={styles.container} role="button">
      <button className={styles.button} {...props}>
        <AddIcon />
        Adicionar uma tarefa
      </button>
    </div>
  );
};
