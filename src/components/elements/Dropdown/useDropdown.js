import { useState, useRef } from 'react';

const useDropdown = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const inputLabel = useRef(null);

  const onChange = event => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
    inputLabel
  };
};

export { useDropdown };
export default { useDropdown };
