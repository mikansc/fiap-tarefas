import { InputWrapper } from "components";
import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: "default" | "outlined";
  label?: string;
}

export const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { icon, fullWidth = false, label, variant = "default", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles.textfield}>
        {!!icon && icon}
        <input {...rest} id={id} ref={ref} type="text" />
      </div>
    </InputWrapper>
  );
});

TextField.displayName = "InputField";
