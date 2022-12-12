import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export const InputField = forwardRef((props: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { icon, ...rest } = props;
  return (
    <div className={styles.inputgroup}>
      {!!icon && icon}
      <input {...rest} className={styles.input} ref={ref} />
    </div>
  );
});

InputField.displayName = "InputField";
