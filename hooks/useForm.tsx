import { ChangeEvent, useState } from "react";

export const useForm = <T,>() => {
  const [formValues, setFormValues] = useState({} as T);

  function handleChange(name: string, value: string) {
    setFormValues((pValues) => ({ ...pValues, [name]: value }));
  }

  const registerField = (name: string) => {
    return {
      name,
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value),
    };
  };

  return { registerField, formValues };
};
