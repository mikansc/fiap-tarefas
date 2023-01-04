import type { SelectFieldProps } from "./Inputs.types";

import { forwardRef } from "react";

import { InputWrapper, Label } from "components";

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>((props, ref) => {
  const { options, label, variant = "outlined", fullWidth = true, id, ...rest } = props;

  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select {...rest} ref={ref}>
        <option value="">Selecione...</option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
});

SelectField.displayName = "InputField";
