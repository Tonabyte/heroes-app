import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = ({target}) => setFormState({
    ...formState,
    [target.name]: target.value
  });

  const clearForm = () => setFormState(initialState);

  return [
    formState,
    handleInputChange,
    clearForm,
  ];
};

export default useForm;
