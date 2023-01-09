import type { NextPage } from "next";
import type { ISignupCredentials } from "types/User";

import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { useForm } from "hooks/useForm";
import { useAuth } from "contexts/authContext";

import { Button, PasswordField, TextField } from "components";

import styles from "./Signup.module.scss";

interface SignupForm extends ISignupCredentials {
  "password-confirm": string;
}

export const Signup: NextPage = () => {
  const { registerField, formValues } = useForm<SignupForm>();
  const router = useRouter();
  const { handleRegister, isLoggedIn, isLoading } = useAuth();

  if (isLoggedIn) router.push("/");

  const createAccount = () => {
    const name = formValues["name"];
    const email = formValues["email"];
    const password = formValues["password"];

    if (!name) {
      return toast.warning("Informe o seu nome");
    }
    if (!email) {
      return toast.warning("Informe o seu email");
    }
    if (!password) {
      return toast.warning("Informe a senha");
    }
    if (!formValues["password-confirm"]) {
      return toast.warning("Você precisa confirmar a senha");
    }
    if (formValues["password"] != formValues["password-confirm"]) {
      return toast.warning("A senha e a  confirmação de senha não são iguais");
    }
    handleRegister({ email, password, name });
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/images/logo.svg" alt="FIAP" width={180} height={50} />
      <main className={styles.inputgroup}>
        <h2 className={styles.title}>Novo Usuário</h2>
        <TextField
          disabled={isLoading}
          {...registerField("name")}
          placeholder="Seu nome completo"
          icon={<Image src="/images/icons/id-icon.svg" width={22} height={22} alt="Full name" />}
        />
        <TextField
          disabled={isLoading}
          {...registerField("email")}
          placeholder="seu_email@email.com"
          icon={<Image src="/images/icons/mail-icon.svg" width={22} height={22} alt="E-mail address" />}
        />
        <PasswordField
          disabled={isLoading}
          {...registerField("password")}
          placeholder="senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={22} height={22} alt="Password" />}
        />
        <PasswordField
          disabled={isLoading}
          {...registerField("password-confirm")}
          placeholder="confirmar senha"
          icon={<Image src="/images/icons/lock-icon.svg" width={22} height={22} alt="Confirm password" />}
        />
        <footer className={styles.buttonContainer}>
          <Button disabled={isLoading} fullWidth onClick={createAccount}>
            Cadastrar
          </Button>
          <Button disabled={isLoading} fullWidth onClick={() => router.push("/")} variant="text">
            Voltar para o login
          </Button>
        </footer>
      </main>
    </div>
  );
};
