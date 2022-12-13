import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.scss";

type Icons = "exit-icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: Icons;
}

export const IconButton = ({ iconName, ...rest }: IconButtonProps) => {
  return (
    <button {...rest} className={styles.button}>
      <Image src={`/images/icons/${iconName}.svg`} alt="Icon" width={24} height={24} />
    </button>
  );
};
