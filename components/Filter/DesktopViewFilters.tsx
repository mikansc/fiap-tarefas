import { useForm } from "hooks/useForm";

import { DateField, Label, SelectField } from "components";

import styles from "./Filter.module.scss";

export function DesktopViewFilters() {
  const { registerField, onSubmitForm } = useForm();

  const handleChange = () => {
    onSubmitForm(console.log);
  };

  return (
    <div className={styles.dateFilters}>
      <Label htmlFor="date-from">Data prevista de conclusão:</Label>
      <DateField {...registerField("startDate")} onChange={(e) => console.log(e.target.value)} id="date-from" />
      <Label htmlFor="date-to">até:</Label>
      <DateField {...registerField("finalDate")} onChange={(e) => console.log(e.target.value)} id="date-to" />
      <div className={styles.divider}></div>
      <Label htmlFor="status">Status:</Label>
      <SelectField
        onChange={(e) => console.log(e.target.value)}
        options={[
          { label: "Ativo", value: 0 },
          { label: "Inativo", value: 1 },
        ]}
      />
    </div>
  );
}
