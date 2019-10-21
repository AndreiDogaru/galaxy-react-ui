import React, { useState, useRef } from 'react';
import { Camera } from 'react-feather';
import Textarea from 'react-textarea-autosize';

import './input-container.scss';
import ProfileIcon from '../../../../../profile-icon/profile-icon';
import EmojiPicker from './UI/emoji-picker/emoji-picker';
import FileUploader from './UI/file-uploader/file-uploader';
import PostFiles from '../../../post-files/post-files';

const InputContainer = () => {
  const [enteredText, setEnteredText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const inputEl = useRef(null);

  const submitMessage = (event) => {
    // Prevent enter from creating new line
    if (event) {
      event.preventDefault();
    }

    setEnteredText('');
    setUploadedFiles([]);
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
    setEnteredText((prev) => prev.slice(0, cursorPosition)
      + emoji
      + prev.slice(cursorPosition, prev.length));
  };

  /**
   * Fired when user uploads new file(s).
   */
  const fileChangeHandler = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  /**
   * Fired when user removes an uploaded file.
   */
  const removeFileHandler = (index) => {
    setUploadedFiles((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  return (
    <div className="input_container">
      <ProfileIcon />

      <div className="input_content">
        <div className="input_row">
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

          <FileUploader onUpload={fileChangeHandler} />

          <div className="clickable">
            <Camera />
          </div>
        </div>

        {uploadedFiles.length > 0 && (
          <PostFiles
            data={uploadedFiles}
            isUploaded
            removeFile={removeFileHandler}
          />
        )}
      </div>
    </div>
  );
};

export default InputContainer;
