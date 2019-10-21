import React from 'react';
import { FileText, X } from 'react-feather';

import './post-files.scss';

const PostFiles = (props) => {
  const {
    data,
    inComment,
    isUploaded,
    removeFile,
  } = props;

  let className = 'post_files';
  if (inComment) {
    className += ' post_files-incomment';
  }
  if (isUploaded) {
    className += ' post_files-uploaded';
  }

  return (
    <div className={className}>
      {data.map((file, index) => (
        <div key={file.id || file.name} className="post_files-item">
          <FileText size={15} />
          <p>{file.name}</p>
          {isUploaded && (
            <div
              className="remove_file"
              onClick={() => removeFile(index)}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              <X size={20} color="#fff" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostFiles;
