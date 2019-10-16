import React from 'react';

import './post-comments.scss';
import InputContainer from './UI/input-container/input-container';

const PostComments = (props) => {
  const { isOpened, postId } = props;

  const comments = [];

  if (postId === 1) {
    comments.push({
      id: 1,
      text: `Synergistically procrastinate plug-and-play catalysts for change for compelling relationships. 
        Assertively enhance user-centric networks after leading-edge e-services. 
        
        Objectively exploit diverse quality vectors with parallel opportunities.`,
      images: [
        { id: 1, name: '/images/1.jpg' },
        { id: 2, name: '/images/2.jpg' },
      ],
      files: [],
    });
  }

  return (
    <div className="post_comments-container">
      <div className={`post_comments-content ${!isOpened ? 'post_comments-content-hidden' : ''}`}>
        <InputContainer />
      </div>
    </div>
  );
};

export default PostComments;
