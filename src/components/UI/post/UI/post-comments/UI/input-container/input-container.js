import React from 'react';
import {
  Smile,
  FileText,
  Camera,
} from 'react-feather';
import Textarea from 'react-textarea-autosize';

import './input-container.scss';
import ProfileIcon from '../../../../../profile-icon/profile-icon';

const InputContainer = () => {
  const submitMessage = (event) => {
    // Prevent enter from creating new line
    if (event) {
      event.preventDefault();
    }

    console.log('creating new message ...');
  };

  const keydownHandler = (event) => {
    // Only submit if the user presses Enter without holding down shift
    if (event.key === 'Enter' && !event.shiftKey) {
      submitMessage(event);
    }
  };

  return (
    <div className="input_container">
      <ProfileIcon />

      <div className="input_content">
        <Textarea
          placeholder="Add a comment..."
          onKeyDown={keydownHandler}
          maxRows={10}
        />
        <Smile />
        <FileText />
        <Camera />
      </div>
    </div>
  );
};

export default InputContainer;
