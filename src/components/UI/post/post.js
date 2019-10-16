import React, { useState } from 'react';

import './post.scss';
import PostHeader from './UI/post-header/post-header';
import PostSubheader from './UI/post-subheader/post-subheader';
import PostText from './UI/post-text/post-text';
import PostFiles from './UI/post-files/post-files';
import PostImages from './UI/post-images/post-images';
import PostStatistics from './UI/post-statistics/post-statistics';
import PostActions from './UI/post-actions/post-actions';
import PostComments from './UI/post-comments/post-comments';

const Post = (props) => {
  const [isCommentsOpened, setIsCommentsOpened] = useState(false);

  const { data } = props;

  const toggleCommentsHandler = () => {
    setIsCommentsOpened((prev) => !prev);
  };

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

      <PostStatistics toggleComments={toggleCommentsHandler} />

      <hr />

      <PostActions toggleComments={toggleCommentsHandler} />

      <PostComments
        isOpened={isCommentsOpened}
        postId={data.id}
      />
    </div>
  );
};

export default Post;
