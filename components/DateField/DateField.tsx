import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { InputHTMLAttributes } from "react";

import styles from "./DateField.module.scss";

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const DateField = forwardRef((props: DateFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input {...props} className={styles.input} ref={ref} type="date" />;
});

DateField.displayName = "InputField";
