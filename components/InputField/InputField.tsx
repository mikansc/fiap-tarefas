import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: "default" | "outlined";
}

export const InputField = forwardRef(({ icon, fullWidth, variant = "default", ...rest }: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={styles.inputgroup}>
      {!!icon && icon}
      <input {...rest} className={`${styles.input} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`} ref={ref} />
    </div>
  );
});

InputField.displayName = "InputField";
