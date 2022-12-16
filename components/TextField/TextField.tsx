import { forwardRef } from "react";
import type { ForwardedRef, InputHTMLAttributes } from "react";

import { InputWrapper, Label } from "components";
import type { InputVariants } from "components/InputWrapper";

import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { icon, fullWidth = false, label, variant = "default", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={styles.textfield}>
        {!!icon && icon}
        <input {...rest} id={id} ref={ref} type="text" />
      </div>
    </InputWrapper>
  );
});

TextField.displayName = "InputField";
