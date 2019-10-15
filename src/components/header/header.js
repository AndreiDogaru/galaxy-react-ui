import React from 'react';
import * as Icon from 'react-feather';

import './header.scss';
import HeaderLink from './UI/link/link';
import ProfileIcon from '../UI/profile-icon/profile-icon';

const Header = () => (
  <div className="header_container">
    <div className="content">
      <div className="left">
        <p>Logo goes here</p>
      </div>

      <div className="center">
        <HeaderLink
          title="Home"
          icon={<Icon.Home />}
          route=""
        />

        <HeaderLink
          title="Groups"
          icon={<Icon.Grid />}
          route="groups"
        />

        <HeaderLink
          title="Calendar"
          icon={<Icon.Calendar />}
          route="calendar"
        />

        <HeaderLink
          title="Users"
          icon={<Icon.Users />}
          route="users"
        />
      </div>

      <div className="right">
        <HeaderLink
          title="Messages"
          icon={<Icon.MessageSquare />}
          route="messages"
        />

        <HeaderLink
          title="Notifications"
          icon={<Icon.Bell />}
          route="notifications"
        />

        <ProfileIcon style={{ marginLeft: '20px' }} />
      </div>
    </div>
  </div>
);

export default Header;
