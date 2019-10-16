import React, { useState } from 'react';
import { MoreHorizontal, Trash2, Edit2 } from 'react-feather';

import './post-subheader.scss';
import ProfileIcon from '../../../profile-icon/profile-icon';
import DropdownMenu from '../../../dropdown-menu/dropdown-menu';

const PostSubheader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { id: 2, name: 'Edit post', icon: <Edit2 size={18} /> },
    {
      id: 1, name: 'Delete post', icon: <Trash2 size={18} />, className: 'dropdown_menu_item-red',
    },
  ];

  const toggleMenuHandler = (event) => {
    setAnchorEl(event ? event.currentTarget : null);
  };

  return (
    <div className="post_subheader">
      <div className="left">
        <ProfileIcon />
        <div className="name_job-title">
          <h5>Andrei Dogaru</h5>
          <p>Senior Web Developer</p>
        </div>
      </div>

      <div className="right">
        <MoreHorizontal aria-haspopup="true" onClick={toggleMenuHandler} />
        <p>2h</p>
      </div>

      <DropdownMenu
        anchorEl={anchorEl}
        handleClose={toggleMenuHandler}
        menuItems={menuItems}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  );
};

export default PostSubheader;
