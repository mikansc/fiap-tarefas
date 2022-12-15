import { Button } from "components/Button";
import { DateField } from "components/DateField";
import { ModalWrapper } from "components/ModalWrapper";
import { SelectField } from "components/SelectField";
import { useTasks } from "contexts/tasksContext";

import styles from "./FilterModal.module.scss";

type FilterModalProps = {
  open: boolean;
  onCancel: () => void;
};

const selectOptions = [
  { label: "Ativo", value: 0 },
  { label: "Inativo", value: 1 },
];

export const FilterModal = ({ open, onCancel }: FilterModalProps) => {
  const { loadTasks } = useTasks();

  return (
    <ModalWrapper open={open}>
      <h2 className={styles.title}>Filtrar tarefas</h2>
      <DateField label="Data de conclusão inicial" fullWidth />
      <DateField label="Data de conclusão final" fullWidth />
      <SelectField label="Status" fullWidth onChange={(e) => console.log(e.target.value)} options={selectOptions} />
      <div className={styles.actionGroup}>
        <Button onClick={() => console.log("salvar")}>Aplicar filtros</Button>
        <Button variant="text" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </ModalWrapper>
  );
};
