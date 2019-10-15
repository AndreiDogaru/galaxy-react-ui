import React from 'react';
import { Grid } from 'react-feather';

import './post-header.scss';

const PostHeader = (props) => {
  const { groupName } = props;

  return (
    <div className="post_header">
      <Grid color="#fff" size={15} />
      <p>{groupName}</p>
    </div>
  );
};

export default PostHeader;
