import React from 'react';
import { Edit2, Trash2 } from 'react-feather';

import './comment_container.scss';
import ProfileIcon from '../../../../../profile-icon/profile-icon';
import PostSubheader from '../../../post-subheader/post-subheader';
import PostText from '../../../post-text/post-text';
import PostStatistics from '../../../post-statistics/post-statistics';
import PostFiles from '../../../post-files/post-files';
import SmallImagesRow from '../../../post-images/UI/small-images-row/small-images-row';

const CommentContainer = (props) => {
  const { data } = props;

  const menuItems = [
    { id: 2, name: 'Edit comment', icon: <Edit2 size={18} /> },
    {
      id: 1, name: 'Delete comment', icon: <Trash2 size={18} />, className: 'dropdown_menu_item-red',
    },
  ];

  return (
    <div className="comment_container">
      <ProfileIcon />

      <div className="comment_content">
        <PostSubheader inComment menuItems={menuItems} />

        <PostText inComment text={data.text} />

        {data.files && data.files.length > 0 && (
          <PostFiles inComment data={data.files} />
        )}

        {data.images && data.images.length > 0 && (
          <div className="comment_images">
            <SmallImagesRow inComment data={data.images} />
          </div>
        )}

        <PostStatistics inComment />
      </div>
    </div>
  );
};

export default CommentContainer;
