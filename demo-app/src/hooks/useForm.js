import { useState } from 'react';

export const useForm = (initialState) => {

  const [ form, setForm ] = useState(initialState);

  const change = ({ target: { name, type, value } }) => {
    setForm({
      ...form,
      [ name ]: type === 'number'
        ? (value.length > 0) && Number(value)
        : value,
    });
  };

  return [ form, change, () => setForm(initialState) ];

};