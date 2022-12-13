import { NextPage } from "next";
import Image from "next/image";

import { Button, InputField } from "components";

import styles from "./Login.module.scss";
import { useForm } from "hooks/useForm";
import { useAuth } from "contexts/authContext";
import type { ILoginCredentials } from "types/User";

export const Login: NextPage = () => {
  const { registerField, formValues } = useForm<ILoginCredentials>();
  const { handleLogin } = useAuth();

  const authenticate = () => {
    handleLogin(formValues);
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/images/logo.svg" alt="FIAP" width={180} height={50} />
      <div className={styles.inputgroup}>
        <InputField
          {...registerField("login")}
          placeholder="email@email.com"
          icon={<Image src="/images/icons/mail-icon.svg" width={16} height={16} alt="Email" />}
        />
        <InputField
          {...registerField("password")}
          placeholder="senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={16} height={16} alt="Email" />}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={authenticate}>Login</Button>
        </div>
      </div>
    </div>
  );
};
