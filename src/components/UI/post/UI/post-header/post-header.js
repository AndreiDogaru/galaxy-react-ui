import React from 'react';
import { Grid } from 'react-feather';

import './post-header.scss';

const PostHeader = (props) => {
  return (
    <div className="post_header">
      <Grid color="#fff" size={15} />
      <p>{props.groupName}</p>
    </div>
  );
};

export default PostHeader