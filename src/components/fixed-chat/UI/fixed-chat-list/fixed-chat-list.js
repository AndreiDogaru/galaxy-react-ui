import React, { useState } from 'react';

import './fixed-chat-list.scss';
import Header from './UI/header/header';
import Search from './UI/search/search';
import ChatItem from './UI/chat-item/chat-item';

const FixedChatList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const newChatHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="fixed_chat_list">
      <Header
        toggleBody={() => setIsExpanded((prev) => !prev)}
        newChatHandler={newChatHandler}
      />

      {isExpanded && (
        <div className="fixed_chat_list-body">
          <Search />

          <div className="fixed_chat_list-scrollable">
            {[1, 2, 3, 4, 5].map((item) => (
              <ChatItem key={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FixedChatList;
