import { IconButton } from "components/IconButton";
import Image from "next/image";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src="/images/logo.svg" width={90} height={24} alt="Logo" />
        <span className={styles.username}>
          Olá, Michael
          <IconButton iconName="exit-icon" />
        </span>
      </div>
    </div>
  );
};
