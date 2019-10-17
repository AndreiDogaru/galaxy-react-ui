import React, { useState, useEffect, useRef } from 'react';
import { Smile } from 'react-feather';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import './emoji-picker.scss';

const EmojiPicker = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const emojiPickerRef = useRef(null);
  const { onEmojiPicked, elRef } = props;

  useEffect(() => {
    // Close the emojiPicker if user clicks outside of box
    const windowClickHandler = (event) => {
      if (emojiPickerRef.current) {
        const rect = emojiPickerRef.current.getBoundingClientRect();
        if (
          event.x < rect.x || event.x > rect.x + rect.width
          || event.y < rect.y || event.y > rect.y + rect.height
        ) {
          setIsOpened(false);
        }
      }
    };

    document.addEventListener('mousedown', windowClickHandler);

    return () => {
      document.removeEventListener('mousedown', windowClickHandler);
    };
  }, []);

  /**
   * Fired when user clicks on Icon to open the Picker.
   */
  const openPickerHandler = () => {
    setIsOpened(true);
    const { _ref } = elRef.current;
    if (_ref) {
      setCursorPosition(_ref.selectionStart);
    }
  };

  /**
   * Fired when user selectes an emoji from the opened Picker.
   */
  const addEmojiHandler = (e) => {
    const emoji = e.native;
    onEmojiPicked(emoji, cursorPosition);
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="emoji_picker_container">
      <div className="clickable">
        <Smile onClick={openPickerHandler} />
      </div>

      {isOpened && (
        <div ref={emojiPickerRef} style={{ position: 'absolute', zIndex: 2 }}>
          <Picker
            onSelect={addEmojiHandler}
            autoFocus
            native
            title="Pick your emoji..."
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
