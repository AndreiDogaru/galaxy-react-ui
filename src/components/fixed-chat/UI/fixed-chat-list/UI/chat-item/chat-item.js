import React from 'react';

import './chat-item.scss';
import ProfileIcon from '../../../../../UI/profile-icon/profile-icon';

const ChatItem = (props) => {
  const { newChatHandler } = props;

  return (
    <div
      className="fixed_chat_list-item"
      onClick={newChatHandler}
      onKeyPress={() => { }}
      role="button"
      tabIndex={0}
    >
      <ProfileIcon size={50} />

      <div className="fixed_chat_list-item_right">
        <h4>Andrei Dogaru</h4>
        <p>You: Yes, lets do this as soon as possible das asdasd ajslkd jasld as</p>
      </div>
    </div>
  );
};

export default ChatItem;
