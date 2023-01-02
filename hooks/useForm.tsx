import type { ChangeEvent } from "react";

import { useCallback, useState } from "react";

type RegisterOptions = { change?: boolean; blur?: boolean; mutate?: (value: string) => string };
type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type FormDataType<T> = {
  [Property in keyof T]: string;
};

export const useForm = <T,>() => {
  const [formValues, setFormValues] = useState({} as Partial<FormDataType<T>>);

  const _handleChange = (name: string, value: string) => {
    setFormValues((pValues) => ({ ...pValues, [name]: value }));
  };

  const registerField = (name: keyof T, config?: RegisterOptions) => {
    const registerConfig = { change: true, blur: false, mutate: undefined, ...config };
    const { blur, change, mutate } = registerConfig;

    const value = formValues[name as keyof T] || "";

    const configuration = {
      name,
      value,
      onChange: (e: FieldEvent) => change && _handleChange(e.target.name, mutate ? mutate(e.target.value) : e.target.value),
      onBlur: (e: FieldEvent) => blur && _handleChange(e.target.name, mutate ? mutate(e.target.value) : e.target.value),
    };

    return configuration;
  };

  const onSubmitForm = (handlerCallback: Function) => handlerCallback(formValues);

  const clearForm = useCallback(() => setFormValues({} as FormDataType<T>), []);

  const setValues = useCallback((values: Partial<FormDataType<T>>) => {
    setFormValues(values);
  }, []);

  return { registerField, formValues, onSubmitForm, clearForm, setValues };
};
