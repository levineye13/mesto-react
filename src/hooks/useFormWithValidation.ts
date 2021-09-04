import React, { useCallback, useState, ChangeEvent } from 'react';

interface IInputState {
  [name: string]: string | boolean;
}

const useFormWithValidation = () => {
  const [values, setValues] = useState<IInputState>({});
  const [errors, setErrors] = useState<IInputState>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    const inputTarget = target as HTMLInputElement;
    const name = inputTarget.name;
    const value =
      inputTarget.type === 'checkbox' ? inputTarget.checked : inputTarget.value;
    const form = inputTarget.closest('form') as HTMLFormElement;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: inputTarget.validationMessage });
    setIsValid(form.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid: boolean = false): void => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleInputChange, errors, isValid, resetForm };
};

export { useFormWithValidation };
