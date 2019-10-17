import React, { useState } from 'react';
import { Smile } from 'react-feather';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import './emoji-picker.scss';

const EmojiPicker = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const { onEmojiPicked } = props;

  const addEmoji = (e) => {
    const emoji = e.native;
    onEmojiPicked(emoji);
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="emoji_picker_container">
      <div className="clickable">
        <Smile onClick={() => setIsOpened((prev) => !prev)} />
      </div>

      {isOpened && (
        <Picker onSelect={addEmoji} style={{ position: 'absolute', zIndex: 99 }} />
      )}
    </div>
  );
};

export default EmojiPicker;
