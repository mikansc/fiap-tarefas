import type { ForwardedRef, InputHTMLAttributes } from "react";
import type { InputVariants } from "components/Inputs";

import { forwardRef } from "react";

import { InputWrapper, Label } from "components";

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export const DateField = forwardRef((props: DateFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, fullWidth = false, variant = "outlined", id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input {...rest} id={id} ref={ref} type="date" />
    </InputWrapper>
  );
});

DateField.displayName = "InputField";
