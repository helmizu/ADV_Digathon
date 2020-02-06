import { useState, useCallback } from 'react';

const useUploadFile = (initialValue = '', initialFile = {}) => {
  const [value, setValue] = useState(initialValue);
  const [file, setFile] = useState(initialFile);

  const onChange = useCallback(event => {
    setValue(event.target.value);
    setFile(event.target.files[0]);
  }, []);

  const reset = () => {
    setValue('');
    setFile({});
  };

  return {
    value,
    file,
    onChange,
    reset
  };
};

export { useUploadFile };
export default { useUploadFile };
