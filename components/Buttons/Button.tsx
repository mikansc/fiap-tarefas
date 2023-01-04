import type { ButtonProps } from "./Buttons.types";

import styles from "./Button.module.scss";

export const Button = ({ children, variant = "outlined", fullWidth = false, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`} type="button">
      {children}
    </button>
  );
};
