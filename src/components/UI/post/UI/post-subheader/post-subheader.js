import React, { useState } from 'react';
import { MoreHorizontal } from 'react-feather';

import './post-subheader.scss';
import ProfileIcon from '../../../profile-icon/profile-icon';
import DropdownMenu from '../../../dropdown-menu/dropdown-menu';

const PostSubheader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { inComment, menuItems } = props;

  const toggleMenuHandler = (event) => {
    setAnchorEl(event ? event.currentTarget : null);
  };

  return (
    <div className={`post_subheader ${inComment ? 'post_subheader-incomment' : ''}`}>
      <div className="left">
        {!inComment && <ProfileIcon />}
        <div className="name_job-title">
          <h5>Andrei Dogaru</h5>
          <p>Senior Web Developer</p>
        </div>
      </div>

      <div className="right">
        {menuItems && (
          <MoreHorizontal aria-haspopup="true" onClick={toggleMenuHandler} />
        )}
        <p>2h</p>
      </div>

      {menuItems && (
        <DropdownMenu
          anchorEl={anchorEl}
          handleClose={toggleMenuHandler}
          menuItems={menuItems}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      )}
    </div>
  );
};

export default PostSubheader;
