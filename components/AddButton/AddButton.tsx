import Image from "next/image";
import AddIcon from "public/images/icons/add-icon.svg";

import styles from "./AddButton.module.scss";

export const AddButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Image src={AddIcon} alt="Adicionar uma tarefa" width={20} height={20} />
        Adicionar uma tarefa
      </button>
    </div>
  );
};
