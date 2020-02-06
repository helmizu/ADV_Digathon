import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@material-ui/core';
// import SvgIcon from '../SvgIcon';
import { NavLink } from 'react-router-dom';
import useStyles from './useStyles';

const DrawerItem = props => {
  const classes = useStyles();

  const handlePreventClick = e => {
    e.preventDefault();
    this.props.onClick(e);
  };

  const { to, text, className, children, nestedUrl, clickOnly, ...rest } = props;
  const nestedUrlProps = nestedUrl ? { strict: true } : { exact: true };
  const clikcAction = clickOnly ? { onClick: handlePreventClick } : {};
  const tempRest = { ...rest, ...nestedUrlProps, ...clikcAction };
  const customClass = className ? `${classes.item} ${className}` : classes.item;
  return (
    <ListItem
      activeClassName={classes.active}
      className={customClass}
      component={NavLink}
      to={to}
      {...tempRest}
    >
      {children !== null && (
        <Fragment>
          {children}
        </Fragment>
      )}
      <Typography className={classes.title} variant="h6">{text}</Typography>
    </ListItem>
  );
};

export default DrawerItem;

DrawerItem.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  clickOnly: PropTypes.bool,
  nestedUrl: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string
};

DrawerItem.defaultProps = {
  children: null,
  className: '',
  clickOnly: false,
  nestedUrl: false,
  onClick: () => '',
  text: 'test',
  to: '/test'
};
