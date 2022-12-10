import Image from "next/image";
import NoContentImage from "public/images/ops.svg";
import styles from "./NoContent.module.scss";

export const NoContent = () => {
  return (
    <>
      <Image src={NoContentImage} alt="No content found" />
      <p className={styles.message}>Você ainda não possui tarefas cadastradas!</p>
    </>
  );
};
