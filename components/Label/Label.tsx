import type { LabelProps } from "./Label.types";

import styles from "./Label.module.scss";

export const Label = (props: LabelProps) => {
  const { children, htmlFor, ...rest } = props;

  return (
    <label className={styles.label} {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
