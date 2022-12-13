import Image from "next/image";

import styles from "./AddButton.module.scss";
import { AddIcon } from "./AddIcon";

export const AddButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <AddIcon />
        Adicionar uma tarefa
      </button>
    </div>
  );
};
