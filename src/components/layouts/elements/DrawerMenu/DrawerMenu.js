import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Drawer, IconButton, Typography } from '@material-ui/core';
import Text from '../../../elements/Text';
import { MenuOutlined } from '@material-ui/icons';
// import { IMAGES } from '../../../../configs';
import DrawerList from './DrawerList';

const DrawerMenu = props => {
  const { classes, open, handleDrawer } = props;
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
        <div style={{ textAlign: 'center', flex: '1' }}>
          <Typography variant="h3">OCR</Typography>
        </div>
        <IconButton onClick={() => handleDrawer(false)}>
          <MenuOutlined />
        </IconButton>
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
