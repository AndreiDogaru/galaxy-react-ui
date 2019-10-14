import React from 'react';
import * as Icon from 'react-feather';

import './header.css';
import HeaderLink from './UI/link/link';

const Header = () => {
  return (
    <div className="header_container">
      <div className="content">
        <div className="left">
          <p>Logo goes here</p>
        </div>

        <div className="center">
          <HeaderLink
            title="Home"
            icon={<Icon.Home />}
            isActive={true}
          />
          
          <HeaderLink
            title="Groups"
            icon={<Icon.Grid />}
            isActive={false}
          />

          <HeaderLink
            title="Calendar"
            icon={<Icon.Calendar />}
            isActive={false}
          />
          
          <HeaderLink
            title="Users"
            icon={<Icon.Users />}
            isActive={false}
          />
        </div>

        <div className="right">
          <HeaderLink
            title="Messages"
            icon={<Icon.MessageSquare />}
            isActive={false}
          />

          <HeaderLink
            title="Notifications"
            icon={<Icon.Bell />}
            isActive={false}
          />

          <div className="profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;