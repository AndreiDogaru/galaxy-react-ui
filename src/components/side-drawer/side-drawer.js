import React from 'react';
import * as Icon from 'react-feather';
import { Drawer, Divider } from '@material-ui/core';

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

        <Divider />

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

        <Divider />

        <HeaderLink
          title="Profile"
          icon={<Icon.User />}
          route="notifications"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Settings"
          icon={<Icon.Settings />}
          route="notifications"
          clickEventHandler={onClose}
        />

        <HeaderLink
          title="Admin"
          icon={<Icon.UserCheck />}
          route="notifications"
          clickEventHandler={onClose}
        />

        <Divider />

        <HeaderLink
          title="Log out"
          icon={<Icon.LogOut />}
          route="notifications"
          clickEventHandler={onClose}
          className="link-red"
        />
      </div>
    </Drawer>
  );
};

export default SideDrawer;
