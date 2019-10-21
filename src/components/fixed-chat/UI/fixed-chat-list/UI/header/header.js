import React from 'react';
import { Edit } from 'react-feather';

import './header.scss';
import ProfileIcon from '../../../../../UI/profile-icon/profile-icon';

const Header = (props) => {
  const { toggleBody, newChatHandler } = props;

  return (
    <div
      className="fixed_chat_list-header"
      onClick={toggleBody}
      onKeyPress={() => { }}
      role="button"
      tabIndex={0}
    >
      <div className="fixed_chat_list-header_left">
        <ProfileIcon size={30} />
        <h3>Messages</h3>
      </div>

      <div
        className="fixed_chat_list-header_icon"
        onClick={newChatHandler}
        onKeyPress={() => { }}
        role="button"
        tabIndex={0}
      >
        <Edit />
      </div>
    </div>
  );
};

export default Header;
