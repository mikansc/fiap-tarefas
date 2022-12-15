import { InputWrapper } from "components/InputWrapper";
import { InputVariants } from "components/InputWrapper/InputWrapper";
import { forwardRef, SelectHTMLAttributes } from "react";

type OptionItem = {
  label: string;
  value: string | number;
};

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionItem[];
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>((props, ref) => {
  const { options, label, variant = "outlined", fullWidth = true, id, ...rest } = props;
  return (
    <InputWrapper fullWidth={fullWidth} variant={variant}>
      {label && <label htmlFor={id}>{label}</label>}
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
