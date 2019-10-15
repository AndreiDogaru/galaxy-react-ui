import React, { useState } from 'react';
import { Heart, MessageSquare } from 'react-feather';

import './post-actions.scss';

const PostActions = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="post_actions">
      <div
        className={isLiked ? 'clickable focused' : 'clickable'}
        onClick={() => setIsLiked((prev) => !prev)}
        onKeyPress={() => { }}
        role="checkbox"
        tabIndex={0}
        aria-checked={isLiked}
      >
        <Heart />
        <h4>Like</h4>
      </div>

      <div className="clickable">
        <MessageSquare />
        <h4>Comment</h4>
      </div>
    </div>
  );
};

export default PostActions;
