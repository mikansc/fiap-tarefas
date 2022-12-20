import { ChangeEvent, useState } from "react";

export const useForm = <T,>() => {
  const [formValues, setFormValues] = useState({} as T);

  const _handleChange = (name: string, value: string) => {
    setFormValues((pValues) => ({ ...pValues, [name]: value }));
  };

  const registerField = (name: string) => {
    return {
      name,
      onChange: (e: ChangeEvent<HTMLInputElement>) => _handleChange(e.target.name, e.target.value),
      onBlur: (e: ChangeEvent<HTMLInputElement>) => _handleChange(e.target.name, e.target.value),
    };
  };

  const onSubmitForm = (handlerCallback: Function) => {
    handlerCallback(formValues);
  };

  return { registerField, formValues, onSubmitForm };
};
