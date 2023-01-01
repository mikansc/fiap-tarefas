import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: "text" | "outlined";
}

export const Button = ({ children, variant = "outlined", fullWidth = false, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`} type="button">
      {children}
    </button>
  );
};
