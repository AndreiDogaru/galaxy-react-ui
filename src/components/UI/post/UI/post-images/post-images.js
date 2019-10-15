import React from 'react';

import './post-images.scss';

const PostImages = (props) => {
  const { data } = props;

  return (
    <div className="post_images">
      <div
        className="image big_image"
        style={{ backgroundImage: `url(${data[0].name})` }}
      />

      {data.length > 1 && (
        <div className="small_images_row">
          {data.map((item, index) => {
            if (index > 0 && index < 4) {
              return (
                <div
                  key={item.id}
                  className="image small_image_row-item"
                  style={{ backgroundImage: `url(${item.name})` }}
                >
                  {data.length > 4 && index === 3 && (
                    <div className="show_more_images">
                      <div className="show_more_images-opacity" />
                      <h1>
                        +
                        {data.length - 4}
                      </h1>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default PostImages;
