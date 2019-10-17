import React from 'react';

import './post-statistics.scss';

const PostStatistics = (props) => {
  const { toggleComments, inComment } = props;

  return (
    <div className={`post_statistics ${inComment ? 'post_statistics-incomment' : ''}`}>
      <p>8 Likes</p>
      {!inComment && (
        <div
          onClick={toggleComments}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          <p>13 Comments</p>
        </div>
      )}
    </div>
  );
};

export default PostStatistics;
