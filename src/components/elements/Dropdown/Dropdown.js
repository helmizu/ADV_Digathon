import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './useStyles';
import { noop } from '../../../utils';

const Dropdown = props => {
  const classes = useStyles();
  const { value, onChange, labelWidth, data } = props;

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <Select
        labelWidth={labelWidth}
        onChange={onChange}
        value={value}
        {...props}
      >
        {data.map((item, index) =>
          (<MenuItem key={index} value={item.value}>{item.label}</MenuItem>)
        )}
      </Select>
    </FormControl>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  labelWidth: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string
};

Dropdown.defaultProps = {
  data: [],
  labelWidth: 0,
  onChange: noop,
  value: ''
};

