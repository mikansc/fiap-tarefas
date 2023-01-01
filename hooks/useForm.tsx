import { ChangeEvent, useState } from "react";

type UseFormOptions = {
  handleOnBlur: boolean;
};

export const useForm = <T,>(options?: UseFormOptions) => {
  const [formValues, setFormValues] = useState({} as T);

  const _handleChange = (name: string, value: string) => {
    setFormValues((pValues) => ({ ...pValues, [name]: value }));
  };

  const registerField = (name: string) => {
    return {
      name,
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => _handleChange(e.target.name, e.target.value),
      onBlur: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => !!options?.handleOnBlur && _handleChange(e.target.name, e.target.value),
    };
  };

  const onSubmitForm = (handlerCallback: Function) => {
    handlerCallback(formValues);
  };

  const clearForm = () => {
    setFormValues({} as T);
  };

  return { registerField, formValues, onSubmitForm, clearForm };
};
