import { InputWrapper } from "components/InputWrapper";
import { InputVariants } from "components/InputWrapper/InputWrapper";
import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./DateField.module.scss";

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export const DateField = forwardRef((props: DateFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, fullWidth = false, variant = "outlined", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <label htmlFor={id}>{label}</label>}
      <input type="date" {...rest} id={id} ref={ref} />
    </InputWrapper>
  );
});

DateField.displayName = "InputField";
