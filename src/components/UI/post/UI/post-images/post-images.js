import React from 'react';

import './post-images.scss';
import SmallImagesRow from './UI/small-images-row/small-images-row';

const PostImages = (props) => {
  const { data } = props;

  return (
    <div className={`post_images ${data.length === 2 ? 'post_images-2items' : ''}`}>
      <div
        className="image big_image"
        style={{ backgroundImage: `url(${data[0].name})` }}
      />

      {data.length > 1 && (
        <SmallImagesRow data={data.slice(1, data.length)} />
      )}
    </div>
  );
};

export default PostImages;
