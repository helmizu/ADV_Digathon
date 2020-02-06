import { useState } from 'react';

const useDatePicker = (initialValue = new Date()) => {
  const [value, setValue] = useState(initialValue);
  const handleDateChange = date => {
    setValue(date);
  };

  return {
    value,
    setValue,
    handleDateChange
  };
};

export { useDatePicker };
export default { useDatePicker };
