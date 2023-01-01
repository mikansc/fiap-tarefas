import { ChangeEvent, useState } from "react";

type RegisterOptions = { change?: boolean; blur?: boolean };
type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export const useForm = <T,>() => {
  const [formValues, setFormValues] = useState({} as T);

  const _handleChange = (name: string, value: string) => {
    setFormValues((pValues) => ({ ...pValues, [name]: value }));
  };

  const registerField = (name: string, config?: RegisterOptions) => {
    const registerConfig = { change: true, blur: false, ...config };
    const { blur, change } = registerConfig;

    const configuration = {
      name,
      onChange: (e: FieldEvent) => change && _handleChange(e.target.name, e.target.value),
      onBlur: (e: FieldEvent) => blur && _handleChange(e.target.name, e.target.value),
    };

    return configuration;
  };

  const onSubmitForm = (handlerCallback: Function) => handlerCallback(formValues);

  const clearForm = () => setFormValues({} as T);

  return { registerField, formValues, onSubmitForm, clearForm };
};
