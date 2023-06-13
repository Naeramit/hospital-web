import { useState } from 'react';

export default function useForm(initialState) {
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState({});
  
    const handleChangeInput = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
  
    const handleSubmitForm = onSubmit => async e => {
      e.preventDefault();
      await onSubmit(input);
      setInput(initialState);
    };
  
    return { input, handleChangeInput, error, handleSubmitForm };
  }