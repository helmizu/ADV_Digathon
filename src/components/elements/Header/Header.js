import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';

const Header = (props = {}) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <div className={classes.header}>
      <Typography className={classes.text} variant="h3">{title}</Typography>
      <div className={classes.line} />
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};
