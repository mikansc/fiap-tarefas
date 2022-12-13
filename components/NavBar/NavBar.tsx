import { IconButton } from "components/IconButton";
import { useAuth } from "contexts/authContext";
import Image from "next/image";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const { handleLogout, user } = useAuth();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src="/images/logo.svg" width={90} height={24} alt="Logo" />
        <span className={styles.username}>
          Olá, {user.name}
          <IconButton iconName="exit-icon" onClick={handleLogout} />
        </span>
      </div>
    </div>
  );
};
