import React, { useState } from 'react';
import { Search, Edit } from 'react-feather';

import './fixed-chat.scss';
import ProfileIcon from '../UI/profile-icon/profile-icon';
import InputField from '../UI/input-field/input-field';

const FixedChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const newChatHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="fixed_chat_container">
      <div className="fixed_chat_list">
        <div
          className="fixed_chat_list-header"
          onClick={() => setIsExpanded((prev) => !prev)}
          onKeyPress={() => {}}
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
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            <Edit />
          </div>
        </div>

        {isExpanded && (
          <div className="fixed_chat_list-body">
            <div className="fixed_chat_list-search">
              <InputField
                icon={<Search />}
                placeholder="Search..."
              />
            </div>

            <div className="fixed_chat_list-scrollable">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 213, 312, 31232, 42, 523, 5235, 21].map((item) => (
                <div
                  key={item}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedChat;
