import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField } from '@material-ui/core';
import { noop } from '../../../utils';
import useStyles from './useStyles';

const UploadFile = (props = {}) => {
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

export default UploadFile;

UploadFile.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
};

UploadFile.defaultProps = {
  onChange: noop,
  required: false,
  value: ''
};
