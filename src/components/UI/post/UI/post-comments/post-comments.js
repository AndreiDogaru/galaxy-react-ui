import React from 'react';

import './post-comments.scss';
import InputContainer from './UI/input-container/input-container';
import CommentContainer from './UI/comment_container/comment_container';

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
        { id: 3, name: '/images/2.jpg' },
        { id: 4, name: '/images/2.jpg' },
        { id: 5, name: '/images/2.jpg' },
      ],
      files: [
        { id: 1, name: 'andrei-dogaru-serban-cv-2019-10-15.pdf' },
      ],
    });
  }

  if (!isOpened) {
    return null;
  }

  return (
    <div className="post_comments-container">
      <div className="post_comments-content">
        <InputContainer />

        {comments.map((item) => (
          <CommentContainer key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PostComments;
