import React, { useState } from 'react';
import { Trash2, Edit2 } from 'react-feather';

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

  const menuItems = [
    { id: 2, name: 'Edit post', icon: <Edit2 size={18} /> },
    {
      id: 1, name: 'Delete post', icon: <Trash2 size={18} />, className: 'dropdown_menu_item-red',
    },
  ];

  const toggleCommentsHandler = () => {
    setIsCommentsOpened((prev) => !prev);
  };

  return (
    <div className="card post_container">
      <PostHeader groupName={data.groupName} />

      <PostSubheader menuItems={menuItems} />

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
