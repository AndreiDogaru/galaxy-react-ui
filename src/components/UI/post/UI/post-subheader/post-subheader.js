import React from 'react';
import { MoreHorizontal } from 'react-feather';

import './post-subheader.scss';
import ProfileIcon from '../../../profile-icon/profile-icon';

const PostSubheader = () => (
  <div className="post_subheader">
    <div className="left">
      <ProfileIcon />
      <div className="name_job-title">
        <h5>Andrei Dogaru</h5>
        <p>Senior Web Developer</p>
      </div>
    </div>

    <div className="right">
      <MoreHorizontal />
      <p>2h</p>
    </div>
  </div>
);

export default PostSubheader;
