import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Header from './elements/Header';
import DrawerMenu from './elements/DrawerMenu';

export const PageBase = props => {
  const [drawer, setDrawer] = useState(true);

  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Header handleDrawer={setDrawer} openDrawer={drawer} />
      <DrawerMenu handleDrawer={setDrawer} open={drawer}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader}/>
        {children}
      </main>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default PageBase;
