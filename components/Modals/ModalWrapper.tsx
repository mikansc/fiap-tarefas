import type { ModalProps } from "./Modals.types";

import ReactDOM from "react-dom";

import styles from "./ModalWrapper.module.scss";

export const ModalWrapper = (props: ModalProps) => {
  const { children, open = true } = props;

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.content}>{children}</div>
    </div>,
    document.getElementById("modal")!
  )!;
};
