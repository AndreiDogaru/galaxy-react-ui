import React from 'react';

import './small-images-row.scss';

const SmallImagesRow = (props) => {
  const { data, inComment } = props;

  return (
    <div className={`small_images_row ${inComment ? 'small_images_row-incomment' : ''}`}>
      {data.map((item, index) => {
        if (index < 3) {
          return (
            <div
              key={item.id}
              className="image small_image_row-item"
              style={{ backgroundImage: `url(${item.name})` }}
            >
              {data.length > 3 && index === 2 && (
                <div className="show_more_images">
                  <div className="show_more_images-opacity" />
                  <h1>
                    +
                    {data.length - 3}
                  </h1>
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SmallImagesRow;
