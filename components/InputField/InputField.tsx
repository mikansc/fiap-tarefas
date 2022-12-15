import { InputWrapper } from "components";
import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: "default" | "outlined";
  label?: string;
}

export const InputField = forwardRef((props: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { icon, fullWidth = false, label, variant = "default", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <label htmlFor={id}>{label}</label>}
      {!!icon && icon}
      <input {...rest} id={id} ref={ref} />
    </InputWrapper>
  );
});

InputField.displayName = "InputField";
