import Image from "next/image";

import { useAuth } from "contexts/authContext";

import { IconButton } from "components";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const { handleLogout, user, isLoading } = useAuth();
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Image src="/images/logo.svg" width={90} height={24} alt="FIAP Tarefas - Logo" />
        <span className={styles.username}>
          Olá, {user.name}
          <IconButton disabled={isLoading} iconName="exit" onClick={handleLogout} />
        </span>
      </div>
    </header>
  );
};
