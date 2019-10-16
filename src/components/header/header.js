import React, { useState } from 'react';
import * as Icon from 'react-feather';

import './header.scss';
import HeaderLink from './UI/link/link';
import ProfileIcon from '../UI/profile-icon/profile-icon';
import DropdownMenu from '../UI/dropdown-menu/dropdown-menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenuHandler = (event) => {
    setAnchorEl(event ? event.currentTarget : null);
  };

  const menuItems = [
    { id: 1, name: 'Profile', icon: <Icon.User size={25} /> },
    { id: 2, name: 'Settings', icon: <Icon.Settings size={25} /> },
    { id: 3, name: 'Admin', icon: <Icon.UserCheck size={25} /> },
    {
      id: 4, name: 'Log out', icon: <Icon.LogOut size={25} />, className: 'dropdown_menu_item-red',
    },
  ];
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

          <div
            aria-haspopup="true"
            onClick={toggleMenuHandler}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            <ProfileIcon style={{ marginLeft: '20px' }} />
          </div>
        </div>
      </div>

      <DropdownMenu
        anchorEl={anchorEl}
        handleClose={toggleMenuHandler}
        menuItems={menuItems}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        className="header_profile_dropdown"
      />
    </div>
  );
};

export default Header;
