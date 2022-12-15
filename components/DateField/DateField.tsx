import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./DateField.module.scss";

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const DateField = forwardRef(({ fullWidth = false, ...props }: DateFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input {...props} className={`${styles.input} ${fullWidth ? styles.fullWidth : ""}`} ref={ref} type="date" />;
});

DateField.displayName = "InputField";
