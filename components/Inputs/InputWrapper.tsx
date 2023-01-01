import styles from "./InputWrapper.module.scss";

export type InputVariants = "default" | "outlined";

interface InputWrapperProps {
  fullWidth: boolean;
  variant: InputVariants;
  children: React.ReactNode;
}

export const InputWrapper = (props: InputWrapperProps) => {
  const { variant = "default", fullWidth, children } = props;
  return <div className={`${styles.inputgroup} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`}>{children}</div>;
};
