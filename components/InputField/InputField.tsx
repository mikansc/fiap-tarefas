import { InputHTMLAttributes } from "react";

import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export const InputField = (props: Partial<InputFieldProps>) => {
  const { icon, ...rest } = props;
  return (
    <div className={styles.inputgroup}>
      {!!icon && icon}
      <input {...rest} className={styles.input} />
    </div>
  );
};
