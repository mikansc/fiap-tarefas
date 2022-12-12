import React, { ButtonHTMLAttributes } from "react";
import { ForwardedRef } from "react";
import { forwardRef } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={styles.button} type="button">
      {children}
    </button>
  );
};
