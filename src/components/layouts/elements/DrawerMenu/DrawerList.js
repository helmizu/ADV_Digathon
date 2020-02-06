import React from 'react';
import { List } from '@material-ui/core';
import DrawerItem from '../../../elements/DrawerItem';
import { ROUTES } from '../../../../configs/routes';

const DrawerList = () => {
  return (
    <List>
      {ROUTES.map((route, index) => {
        const { title = '', path = '', Icon = null } = route;
        return (
          <DrawerItem
            key={index}
            text={title}
            to={path}
          >
            {Icon && <Icon/>}
          </DrawerItem>
        );
      })}
    </List>
  );
};

export default DrawerList;
