import type { TextInputProps } from "./Inputs.types";

import { forwardRef } from "react";

import { InputWrapper, Label } from "components";

import styles from "./DateField.module.scss";

export const DateField = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, fullWidth = false, variant = "outlined", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={styles.textfield}>
        <input {...rest} id={id} ref={ref} type="date" />
      </div>
    </InputWrapper>
  );
});

DateField.displayName = "InputField";
