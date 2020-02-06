import React from 'react';
import { List } from '@material-ui/core';
import DrawerItem from '../../../elements/DrawerItem';
import { ROUTES } from '../../../../configs/routes';

const DrawerList = () => {
  return (
    <List>
      {ROUTES.map((route, index) => {
        const { title = '', path = '', Icon = null, showInDrawer = false } = route;
        if (showInDrawer)
          return (
            <DrawerItem
              key={index}
              text={title}
              to={path}
            >
              {Icon && <Icon/>}
            </DrawerItem>
          );
        return null;
      })}
    </List>
  );
};

export default DrawerList;
