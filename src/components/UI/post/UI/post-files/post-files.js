import React from 'react';
import { FileText } from 'react-feather';

import './post-files.scss';

const PostFiles = (props) => {
  const { data } = props;

  return (
    <div className="post_files">
      {data.map((file) => (
        <div key={file.id} className="post_files-item">
          <FileText size={15} />
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PostFiles;
