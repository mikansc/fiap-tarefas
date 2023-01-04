import type { TextInputWithIconProps } from "./Inputs.types";

import { forwardRef, useState } from "react";

import { IconButton, InputWrapper, Label } from "components";

import styles from "./PasswordField.module.scss";

export const PasswordField = forwardRef<HTMLInputElement, TextInputWithIconProps>((props, ref) => {
  const [show, setShow] = useState(false);

  const { icon, fullWidth = false, label, variant = "default", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={styles.textfield}>
        {!!icon && icon}
        <input {...rest} id={id} ref={ref} type={show ? "text" : "password"} />
        <div className={styles.showIcon}>
          <IconButton iconName={show ? "hide" : "show"} onClick={() => setShow((s) => !s)} />
        </div>
      </div>
    </InputWrapper>
  );
});

PasswordField.displayName = "PasswordField";
