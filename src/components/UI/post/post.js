import React, { useState } from 'react';
import * as Icon from 'react-feather';

import './post.scss';
import ProfileIcon from '../profile-icon/profile-icon';

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card post_container">
      <div className="post_header">
        <Icon.Grid color="#fff" size={15} />
        <p>{props.data.groupName}</p>
      </div>

      <div className="post_subheader">
        <div className="left">
          <ProfileIcon />
          <div className="name_job-title">
            <h5>Andrei Dogaru</h5>
            <p>Senior Web Developer</p>
          </div>
        </div>

        <div className="right">
          <Icon.MoreHorizontal />
          <p>2h</p>
        </div>
      </div>

      <p className="post_text">{props.data.text}</p>

      <div className="post_statistics">
        <p>8 Likes</p>
        <p>13 Comments</p>
      </div>

      <hr />

      <div className="post_actions">
        <div 
          className={isLiked ? 'clickable focused' : 'clickable'} 
          onClick={() => setIsLiked(prev => !prev)}
        >
          <Icon.Heart />
          <h4>Like</h4>
        </div>

        <div className="clickable">
          <Icon.MessageSquare />
          <h4>Comment</h4>
        </div>
      </div>
    </div>
  );
};

export default Post;