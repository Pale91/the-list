import { useState } from 'react';

export const useFormUpdater = () => {
  const [formState, setFormState] = useState<{ [key: string]: string }>({});

  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return { formState, onChange };
};
