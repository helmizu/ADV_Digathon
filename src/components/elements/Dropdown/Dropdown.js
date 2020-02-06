import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import useStyles from './useStyles';
import { noop } from '../../../utils';

const Dropdown = props => {
  const classes = useStyles();
  const { value, onChange, labelWidth, data, mappingItem, label } = props;
  let labelKey = 'label';
  let valueKey = 'value';
  if(mappingItem.label) labelKey = mappingItem.label;
  if(mappingItem.value) valueKey = mappingItem.value;

  return (
    <FormControl className={classes.formControl} variant="outlined">
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        labelWidth={labelWidth}
        onChange={onChange}
        value={value}
        {...props}
      >
        {data.map((item, index) =>
          (<MenuItem key={index} value={item[`${valueKey}`]}>{item[`${labelKey}`]}</MenuItem>)
        )}
      </Select>
    </FormControl>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  labelWidth: PropTypes.number,
  mappingItem: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Dropdown.defaultProps = {
  data: [],
  label: '',
  labelWidth: 0,
  mappingItem: {},
  onChange: noop,
  value: ''
};

