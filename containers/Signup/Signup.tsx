import type { ISignupCredentials } from "types/User";

import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { Button, PasswordField, TextField } from "components";

import { useForm } from "hooks/useForm";

import styles from "./Signup.module.scss";
import { useAuth } from "contexts/authContext";
import { useEffect } from "react";

interface SignupForm extends ISignupCredentials {
  "password-confirm": string;
}

export const Signup: NextPage = () => {
  const { registerField, formValues } = useForm<SignupForm>();
  const router = useRouter();
  const { handleRegister, isLoggedIn } = useAuth();

  if (isLoggedIn) router.push("/");

  const createAccount = () => {
    const name = formValues["name"];
    const email = formValues["email"];
    const password = formValues["password"];

    if (!name) {
      return alert("Informe o seu nome");
    }
    if (!email) {
      return alert("Informe o seu email");
    }
    if (!password) {
      return alert("Informe a senha");
    }
    if (!formValues["password-confirm"]) {
      return alert("Você precisa confirmar a senha");
    }
    if (formValues["password"] != formValues["password-confirm"]) {
      return alert("A senha e a  confirmação de senha não são iguais");
    }
    handleRegister({ email, password, name });
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/images/logo.svg" alt="FIAP" width={180} height={50} />
      <div className={styles.inputgroup}>
        <h2 className={styles.title}>Novo Usuário</h2>
        <TextField
          {...registerField("name")}
          placeholder="Seu nome completo"
          icon={<Image src="/images/icons/id-icon.svg" width={22} height={22} alt="Full name" />}
        />
        <TextField
          {...registerField("email")}
          placeholder="seu_email@email.com"
          icon={<Image src="/images/icons/mail-icon.svg" width={22} height={22} alt="E-mail address" />}
        />
        <PasswordField
          {...registerField("password")}
          placeholder="senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={22} height={22} alt="Password" />}
        />
        <PasswordField
          {...registerField("password-confirm")}
          placeholder="confirmar senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={22} height={22} alt="Confirm password" />}
        />
        <div className={styles.buttonContainer}>
          <Button fullWidth onClick={createAccount}>
            Cadastrar
          </Button>
          <Button fullWidth onClick={() => router.push("/")} variant="text">
            Voltar para o login
          </Button>
        </div>
      </div>
    </div>
  );
};
