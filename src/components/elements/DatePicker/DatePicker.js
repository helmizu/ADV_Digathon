import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { noop } from '../../../utils';
import useStyles from './useStyles';

const DatePicker = (props = {}) => {
  const classes = useStyles();
  const { value, handleDateChange, format } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.formControl}
        disableToolbar
        format={format}
        InputAdornmentProps={{
          className: classes.inputAddormentControl
        }}
        inputProps={{
          className: classes.inputControl,
        }}
        InputProps={{
          disableUnderline: true,
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        margin="normal"
        onChange={handleDateChange}
        value={value}
        variant="inline"
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  format: PropTypes.string,
  handleDateChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

DatePicker.defaultProps = {
  format: 'MM/dd/yyyy',
  handleDateChange: noop,
  required: false,
  value: new Date()
};
