import { useState, useCallback } from 'react';

const useFieldLabel = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  return {
    value,
    setValue,
    onChange
  };
};

export { useFieldLabel };
export default { useFieldLabel };
