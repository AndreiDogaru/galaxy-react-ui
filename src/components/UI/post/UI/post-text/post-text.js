import React, { useState } from 'react';

import './post-text.scss';

const PostText = (props) => {
  const [visibleText, setVisibleText] = useState(props.text.slice(0, 200));

  return (
    <div className="post_text_container">
      <p className="post_text">
        {visibleText}
        {visibleText.length !== props.text.length && (
          <span onClick={() => setVisibleText(props.text)}> ...see more</span>
        )}
      </p>
    </div>
  );
};

export default PostText;