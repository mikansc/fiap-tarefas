import { forwardRef, SelectHTMLAttributes } from "react";

import styles from "./SelectField.module.scss";

type OptionItem = {
  label: string;
  value: string | number;
};

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionItem[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>((props, ref) => {
  const { options, ...rest } = props;
  return (
    <select {...rest} className={styles.input} ref={ref}>
      <option value="">Selecione...</option>
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

SelectField.displayName = "InputField";
