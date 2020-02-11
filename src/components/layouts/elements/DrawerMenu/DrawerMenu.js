import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Drawer, Typography } from '@material-ui/core';
import Text from '../../../elements/Text';
// import { MenuOutlined } from '@material-ui/icons';
// import { IMAGES } from '../../../../configs';
import DrawerList from './DrawerList';

const DrawerMenu = props => {
  const { classes, open } = props;
  return (
    <Drawer
      anchor="left"
      classes={{
        paper: classes.drawerPaper
      }}
      className={open ? classes.drawer : null}
      open={open}
      style={{ zIndex: 1 }}
      variant="persistent"
    >
      <div className={clsx(classes.drawerHeader, classes.shadowTop)}>
        {/* <img src={IMAGES.LOGO} style={{ width: 130, marginRight: 36 }} /> */}
        <div style={{ textAlign: 'left', width: 200, marginLeft: 16 }}>
          <Typography className={classes.drawerHeaderText} variant="h4">Text Detection</Typography>
          <div className={classes.line} />
        </div>
        {/* <IconButton onClick={() => handleDrawer(false)}>
          <MenuOutlined />
        </IconButton> */}
      </div>
      <div className={classes.space} />
      <DrawerList />
      <Text className={classes.footer} variant="body2">
          © HZS
      </Text>
    </Drawer>
  );
};

export default DrawerMenu;

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
