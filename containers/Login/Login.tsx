import { NextPage } from "next";
import Image from "next/image";
import { Button, InputField } from "components";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/images/logo.svg" alt="FIAP" width={180} height={50} />
      <div className={styles.inputgroup}>
        <InputField placeholder="email@email.com" icon={<Image src="/images/icons/mail-icon.svg" width={16} height={16} alt="Email" />} />
        <InputField placeholder="senha" icon={<Image src="/images/icons/lock-icon.svg" width={16} height={16} alt="Email" />} />
        <div className={styles.buttonContainer}>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
