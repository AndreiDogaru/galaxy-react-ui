import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import './dropdown-menu.scss';

const DropdownMenu = (props) => {
  const {
    anchorEl,
    handleClose,
    handleItemClick,
    menuItems,
    getContentAnchorEl,
    anchorOrigin,
    transformOrigin,
    className,
  } = props;

  return (
    <Menu
      className={className}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => handleClose(null)}
      getContentAnchorEl={getContentAnchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      {menuItems.map((item) => (
        <MenuItem
          className={`dropdown_menu_item  ${item.className}`}
          key={item.id}
          onClick={() => handleItemClick()}
        >
          {item.icon}
          <p>{item.name}</p>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropdownMenu;
