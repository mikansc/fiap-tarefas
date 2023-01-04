import type { InputWrapperProps } from "./Inputs.types";

import styles from "./InputWrapper.module.scss";

export const InputWrapper = (props: InputWrapperProps) => {
  const { variant = "default", fullWidth, children } = props;
  return <div className={`${styles.inputgroup} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`}>{children}</div>;
};
