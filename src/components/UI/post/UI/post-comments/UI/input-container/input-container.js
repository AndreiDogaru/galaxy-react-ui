import React, { useState, useRef } from 'react';
import { FileText, Camera } from 'react-feather';
import Textarea from 'react-textarea-autosize';

import './input-container.scss';
import ProfileIcon from '../../../../../profile-icon/profile-icon';
import EmojiPicker from './UI/emoji-picker/emoji-picker';

const InputContainer = () => {
  const [enteredText, setEnteredText] = useState('');
  const inputEl = useRef(null);

  const submitMessage = (event) => {
    // Prevent enter from creating new line
    if (event) {
      event.preventDefault();
    }

    console.log('creating new message ...');
  };

  /**
   * Fired when user presses a key while focusing on the textarea.
   * If the key is ENTER, without holding down SHIFT, make sure to submit the message.
   */
  const keydownHandler = (event) => {
    // Only submit if the user presses Enter without holding down shift
    if (event.key === 'Enter' && !event.shiftKey) {
      submitMessage(event);
    }
  };

  /**
   * Fired when user clicks on an emoji from EmojiPicker component.
   */
  const handleEmojiPicked = (emoji, cursorPosition) => {
    // TODO: add emoji to cursor position in textarea
    setEnteredText((prev) => prev.slice(0, cursorPosition)
      + emoji
      + prev.slice(cursorPosition, prev.length));
  };

  return (
    <div className="input_container">
      <ProfileIcon />

      <div className="input_content">
        <Textarea
          ref={inputEl}
          placeholder="Add a comment..."
          onKeyDown={keydownHandler}
          maxRows={10}
          value={enteredText}
          onChange={(event) => setEnteredText(event.target.value)}
        />

        <EmojiPicker
          onEmojiPicked={handleEmojiPicked}
          elRef={inputEl}
        />

        <div className="clickable">
          <FileText />
        </div>

        <div className="clickable">
          <Camera />
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
