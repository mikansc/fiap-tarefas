import { LabelHTMLAttributes, PropsWithChildren } from "react";

import styles from "./Label.module.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = (props: PropsWithChildren<LabelProps>) => {
  const { children, htmlFor, ...rest } = props;

  return (
    <label className={styles.label} {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
