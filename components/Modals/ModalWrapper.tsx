import ReactDOM from "react-dom";

import styles from "./ModalWrapper.module.scss";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
};

export const ModalWrapper = ({ children, open = true }: ModalProps) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.content}>{children}</div>
    </div>,
    document.getElementById("modal")!
  )!;
};
