import Image from "next/image";
import styles from "./IconButton.module.scss";

type Icons = "exit-icon";

interface IconButtonProps {
  iconName: Icons;
}

export const IconButton = ({ iconName }: IconButtonProps) => {
  return (
    <button className={styles.button}>
      <Image src={`/images/icons/${iconName}.svg`} alt="Icon" width={24} height={24} />
    </button>
  );
};
