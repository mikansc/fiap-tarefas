import type { TextInputWithIconProps } from "./Inputs.types";

import { forwardRef } from "react";

import { InputWrapper, Label } from "components";

import styles from "./TextField.module.scss";

export const TextField = forwardRef<HTMLInputElement, TextInputWithIconProps>((props, ref) => {
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
