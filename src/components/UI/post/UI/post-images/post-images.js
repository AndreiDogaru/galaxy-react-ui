import React from 'react';

import './post-images.scss';

const PostImages = (props) => {
  return (
    <div className="post_images">
      <div
        className="image big_image"
        style={{ backgroundImage: `url(${props.data[0]})` }}
      ></div>

      {props.data.length > 1 && (
        <div className="small_images_row">
          {props.data.map((item, index) => {
            if (index > 0 && index < 4) {
              return (
                <div
                  key={index}
                  className="image small_image_row-item"
                  style={{ backgroundImage: `url(${item})` }}
                >
                  {props.data.length > 4 && index === 3 && (
                    <div className="show_more_images">
                      <div className="show_more_images-opacity"></div>
                      <h1>+ {props.data.length - 4}</h1>
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