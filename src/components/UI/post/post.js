import React from 'react';

import './post.scss';
import PostHeader from './UI/post-header/post-header';
import PostSubheader from './UI/post-subheader/post-subheader';
import PostText from './UI/post-text/post-text';
import PostFiles from './UI/post-files/post-files';
import PostImages from './UI/post-images/post-images';
import PostStatistics from './UI/post-statistics/post-statistics';
import PostActions from './UI/post-actions/post-actions';

const Post = (props) => {
  const { data } = props;

  return (
    <div className="card post_container">
      <PostHeader groupName={data.groupName} />

      <PostSubheader />

      <PostText text={data.text} />

      {data.files && data.files.length > 0 && (
        <PostFiles data={data.files} />
      )}

      {data.images && data.images.length > 0 && (
        <PostImages data={data.images} />
      )}

      <PostStatistics />

      <hr />

      <PostActions />
    </div>
  );
};

export default Post;
