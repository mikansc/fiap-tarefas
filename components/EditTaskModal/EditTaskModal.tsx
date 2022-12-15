import { Button } from "components/Button";
import { DateField } from "components/DateField";
import { InputField } from "components/InputField";
import { ModalWrapper } from "components/ModalWrapper";

import styles from "./EditTaskModal.module.scss";

type EditTaskModalProps = {
  open: boolean;
};

export const EditTaskModal = ({ open }: EditTaskModalProps) => {
  return (
    <ModalWrapper open={open}>
      <h2 className={styles.title}>Editar tarefa</h2>
      <InputField variant="outlined" fullWidth placeholder="Título da tarefa" />
      <DateField fullWidth />
      <div className={styles.actionGroup}>
        <Button>Salvar alterações</Button>
        <Button variant="text">Excluir tarefa</Button>
      </div>
    </ModalWrapper>
  );
};
