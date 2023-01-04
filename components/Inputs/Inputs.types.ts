type InputVariants = "default" | "outlined";
type OptionItem = { label: string; value: string | number };

interface BaseInputProps {
  fullWidth?: boolean;
  variant?: InputVariants;
  label?: string;
}

export interface TextInputProps extends BaseInputProps, React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputWithIconProps extends TextInputProps {
  icon?: React.ReactNode;
}

export interface SelectFieldProps extends BaseInputProps, React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionItem[];
}

export interface InputWrapperProps {
  fullWidth: boolean;
  variant: InputVariants;
  children: React.ReactNode;
}
