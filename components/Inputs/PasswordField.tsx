import { ForwardedRef, InputHTMLAttributes, useState } from "react";
import type { InputVariants } from "components/Inputs";

import { forwardRef } from "react";

import { IconButton, InputWrapper, Label } from "components";

import styles from "./PasswordField.module.scss";
import Image from "next/image";

interface PasswordField extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export const PasswordField = forwardRef((props: PasswordField, ref: ForwardedRef<HTMLInputElement>) => {
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
