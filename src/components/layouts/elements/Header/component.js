import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Paper,
  ListItem,
  List,
  ClickAwayListener,
  ListItemText,
  ListItemAvatar,
  ListItemIcon
} from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown, Menu as MenuIcon, Dashboard } from '@material-ui/icons';
import DrawerItem from '../../../elements/DrawerItem';
import Text from '../../../elements/Text';
import { IMAGES } from '../../../../configs';
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuProfileRef: null
    };
  }

  _handleMenuProfileOpen = event => {
    this.setState({ menuProfileRef: event.currentTarget });
  };

  _handleMenuProfileClose = () => {
    this.setState({ menuProfileRef: null });
  };

  _renderMenuProfile = () => {
    const { classes } = this.props;
    const { menuProfileRef } = this.state;
    const isMenuOpen = Boolean(menuProfileRef);

    return isMenuOpen && (
      <ClickAwayListener onClickAway={this._handleMenuProfileClose}>
        <Paper className={classes.menuChild} onMouseLeave={this._handleMenuProfileClose}>
          <List>
            <DrawerItem
              onClick={() => this._handleMenuProfileClose()}
              text="Dashboard"
              to={'/'}
            >
              <Dashboard />
            </DrawerItem>
          </List>
        </Paper>
      </ClickAwayListener>
    );
  };

  _renderMenu = () => {
    const { classes } = this.props;
    const { menuProfileRef } = this.state;
    const isMenuOpen = Boolean(menuProfileRef);

    return (
      <div className={classes.sectionDesktop}>
        <List
          className={clsx(classes.removePadding, classes.relativePosition)}
          onClick={this._handleMenuProfileOpen}
        >
          <ListItem className={classes.listItemAccount}>
            <ListItemAvatar classes={{ root: classes.rootAvatar }}>
              <Avatar className={classes.avatar} src={IMAGES.PROFILE_SM} />
            </ListItemAvatar>
            <ListItemText
              classes={{ root: classes.userName }}
              color="secondary"
              primary={
                <Text noWrap variant="inherit">
                  Name
                </Text>
              }
              variant="subtitle"
            />
            <ListItemIcon>
              {isMenuOpen ? <ArrowDropUp color="secondary" /> : <ArrowDropDown color="secondary" />}
            </ListItemIcon>
          </ListItem>
          {this._renderMenuProfile()}
        </List>
      </div>
    );
  };

  render() {
    const { classes, openDrawer, handleDrawer } = this.props;

    return (
      <Fragment>
        <AppBar
          className={clsx(classes.appBar, classes.shadowTop, { [classes.appBarShift]: openDrawer })}
          position="fixed"
        >
          <Toolbar disableGutters={!openDrawer} style={{ paddingRight: 0 }}>
            <IconButton
              className={clsx(classes.menuButton, openDrawer && classes.hide)}
              color="inherit"
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Text color="inherit" noWrap variant="h6">
              Telkom Digital Solution
            </Text>
            <div className={classes.grow} />
            {/* {this._renderMenu()} */}
          </Toolbar>
        </AppBar>
        {this.state.menuProfileRef && <div className={classes.overlay} />}
      </Fragment>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  handleDrawer: PropTypes.func,
  openDrawer: PropTypes.bool
};

Component.defaultProps = {
  classes: {},
  data: {},
  handleDrawer: () => {},
  openDrawer: false
};
