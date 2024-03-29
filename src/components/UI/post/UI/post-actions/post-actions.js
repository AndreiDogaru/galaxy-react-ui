import React, { useState } from 'react';
import { Heart, MessageSquare } from 'react-feather';

import './post-actions.scss';

const PostActions = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const { toggleComments, inComment } = props;

  return (
    <div className={`post_actions ${inComment ? 'post_actions-incomment' : ''}`}>
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

      {!inComment && (
        <div
          className="clickable"
          onClick={toggleComments}
          onKeyPress={() => { }}
          role="button"
          tabIndex={0}
        >
          <MessageSquare />
          <h4>Comment</h4>
        </div>
      )}
    </div>
  );
};

export default PostActions;
