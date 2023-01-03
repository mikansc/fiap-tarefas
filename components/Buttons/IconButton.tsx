import type { ButtonHTMLAttributes } from "react";
import Image from "next/image";

import styles from "./IconButton.module.scss";

type Icons = "exit" | "filter" | "close" | "show" | "hide";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: Icons;
}

export const IconButton = ({ iconName, ...rest }: IconButtonProps) => {
  return (
    <button {...rest} className={styles.button}>
      <Image src={`/images/icons/${iconName}-icon.svg`} alt="Icon" width={24} height={24} />
    </button>
  );
};
