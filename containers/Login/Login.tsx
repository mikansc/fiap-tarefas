import type { ILoginCredentials } from "types/User";
import type { NextPage } from "next";

import Image from "next/image";
import { useRouter } from "next/router";

import { useForm } from "hooks/useForm";
import { useAuth } from "contexts/authContext";

import { Button, PasswordField, TextField } from "components";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  const { registerField, formValues } = useForm<ILoginCredentials>();
  const { handleLogin } = useAuth();
  const router = useRouter();

  const authenticate = () => {
    handleLogin(formValues as ILoginCredentials);
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/images/logo.svg" alt="FIAP Logo" width={180} height={50} />
      <main className={styles.inputgroup}>
        <TextField
          {...registerField("login")}
          placeholder="email@email.com"
          icon={<Image src="/images/icons/mail-icon.svg" width={22} height={22} alt="E-mail address" />}
        />
        <PasswordField
          {...registerField("password")}
          placeholder="senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={22} height={22} alt="Password" />}
        />
        <footer className={styles.buttonContainer}>
          <Button fullWidth onClick={authenticate}>
            Login
          </Button>
          <Button fullWidth onClick={() => router.push("/signin")} variant="text">
            Criar uma nova conta
          </Button>
        </footer>
      </main>
    </div>
  );
};
