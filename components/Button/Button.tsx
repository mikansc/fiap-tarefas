import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ children }: { children: React.ReactNode }) => {
  console.log(styles);

  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};
