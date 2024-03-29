import React, { useState } from 'react';

import './post-text.scss';

const PostText = (props) => {
  const { text, inComment } = props;
  const [visibleText, setVisibleText] = useState(text.slice(0, 200));

  return (
    <div className={`post_text_container ${inComment ? 'post_text_container-incomment' : ''}`}>
      <p className="post_text">
        {visibleText}
        {visibleText.length !== text.length && (
          <span
            onClick={() => setVisibleText(text)}
            onKeyPress={() => { }}
            role="button"
            tabIndex={0}
          >
            {' '}
            ...see more
          </span>
        )}
      </p>
    </div>
  );
};

export default PostText;
