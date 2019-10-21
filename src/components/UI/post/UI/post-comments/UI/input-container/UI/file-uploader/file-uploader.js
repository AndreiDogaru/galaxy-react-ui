import React, { useRef } from 'react';
import { FileText } from 'react-feather';

const FileUploader = (props) => {
  const fileInput = useRef(null);

  const { onUpload } = props;

  return (
    <div className="clickable">
      <FileText
        onClick={() => fileInput.current.click()}
      />
      <input
        type="file"
        hidden
        accept="application/pdf"
        ref={fileInput}
        multiple
        onChange={onUpload}
      />
    </div>
  );
};

export default FileUploader;
