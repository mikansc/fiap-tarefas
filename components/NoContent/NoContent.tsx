import Image from "next/image";
import NoContentImage from "public/images/ops.svg";
import styles from "./NoContent.module.scss";

export const NoContent = () => {
  return (
    <div className={styles.container}>
      <Image src={NoContentImage} alt="No content found" />
      <span className={styles.message}>Você ainda não possui tarefas cadastradas!</span>
    </div>
  );
};
