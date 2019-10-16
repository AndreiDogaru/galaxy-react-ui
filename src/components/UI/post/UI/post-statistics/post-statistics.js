import React from 'react';

import './post-statistics.scss';

const PostStatistics = (props) => {
  const { toggleComments } = props;

  return (
    <div className="post_statistics">
      <p>8 Likes</p>
      <div
        onClick={toggleComments}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
      >
        <p>13 Comments</p>
      </div>
    </div>
  );
};

export default PostStatistics;
