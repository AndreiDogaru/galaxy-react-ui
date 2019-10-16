import React from 'react';
import * as Icon from 'react-feather';
import { Drawer } from '@material-ui/core';

import './side-drawer.scss';
import HeaderLink from '../header/UI/link/link';

const SideDrawer = (props) => {
  const {
    isDrawerOpened,
    onClose,
  } = props;

  return (
    <Drawer open={isDrawerOpened} onClose={onClose}>
      <div className="side_drawer-item">
        <HeaderLink
          title="Home"
          icon={<Icon.Home />}
          route=""
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Groups"
          icon={<Icon.Grid />}
          route="groups"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Calendar"
          icon={<Icon.Calendar />}
          route="calendar"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Users"
          icon={<Icon.Users />}
          route="users"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Messages"
          icon={<Icon.MessageSquare />}
          route="messages"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Notifications"
          icon={<Icon.Bell />}
          route="notifications"
          clickEventHandler={onClose}
        />
      </div>
    </Drawer>
  );
};

export default SideDrawer;
