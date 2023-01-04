import type { IconButtonProps } from "./Buttons.types";

import Image from "next/image";

import styles from "./IconButton.module.scss";

export const IconButton = ({ iconName, ...rest }: IconButtonProps) => {
  return (
    <button {...rest} className={styles.button} type="button">
      <Image src={`/images/icons/${iconName}-icon.svg`} alt={`${iconName} icon`} width={24} height={24} />
    </button>
  );
};
