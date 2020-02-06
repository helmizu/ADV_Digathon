import { useState, useCallback } from 'react';

const defaultValue = {
  title: '',
  match: {
    text: '',
    count: 0
  },
  before: '',
  after: ''
};

const useMultipleFormAddKeyword = () => {
  const [multipleValue, setMultipleValue] = useState([defaultValue]);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const onChangeTitle = index => event => {
    const newValue = multipleValue;
    newValue[index] = { ...newValue[index], title: event.target.value };
    setMultipleValue(newValue);
    forceUpdate();
  };

  const onChangeMatch = index =>  event => {
    const newValue = multipleValue;
    newValue[index] = { ...newValue[index], match: {
      ...newValue[index].match, text: event.target.value
    } };
    setMultipleValue(newValue);
    forceUpdate();
  };

  const onChangeCount = index => event => {
    const newValue = multipleValue;
    newValue[index] = { ...newValue[index], match: {
      ...newValue[index].match, count: Number(event.target.value)
    } };
    setMultipleValue(newValue);
    forceUpdate();
  };

  const onChangeBefore = index => event => {
    const newValue = multipleValue;
    newValue[index] = { ...newValue[index], before: event.target.value };
    setMultipleValue(newValue);
    forceUpdate();
  };

  const onChangeAfter = index => event => {
    const newValue = multipleValue;
    newValue[index] = { ...newValue[index], after: event.target.value };
    setMultipleValue(newValue);
    forceUpdate();
  };

  const onClickAddForm = () => {
    setMultipleValue(prevValue => [...prevValue, defaultValue]);
  };

  const onClickRemoveForm = (index) => {
    const newValue = multipleValue;
    if (index > -1) {
      newValue.splice(index, 1);
    }
    setMultipleValue(newValue);
    forceUpdate();
  };

  const updateValue = (newValue = {}) => {
    setMultipleValue(newValue);
    forceUpdate();
  };


  return {
    onChange: {
      onChangeTitle,
      onChangeMatch,
      onChangeCount,
      onChangeBefore,
      onChangeAfter
    },
    onClickAddForm,
    onClickRemoveForm,
    updateValue,
    multipleValue
  };
};

export { useMultipleFormAddKeyword };
export default { useMultipleFormAddKeyword };
