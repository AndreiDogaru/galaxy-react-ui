import React from 'react';

import './post-text.scss';

const PostText = (props) => {
  return (
    <p className="post_text">{props.text}</p>
  );
};

export default PostText;