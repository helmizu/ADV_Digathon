import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField } from '@material-ui/core';
import { noop } from '../../../utils';
import useStyles from './useStyles';

const FieldLabel = (props = {}) => {
  const classes = useStyles();
  const { onChange, value, required } = props;
  return (
    <FormControl className={classes.formControl} variant="outlined">
      <TextField
        margin="normal"
        onChange={onChange}
        required={required}
        type="file"
        value={value}
        variant="outlined"
        {...props}
      />
    </FormControl>
  );
};

export default FieldLabel;

FieldLabel.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
};

FieldLabel.defaultProps = {
  onChange: noop,
  required: false,
  value: ''
};
