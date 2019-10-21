import React from 'react';

import './profile-icon.scss';

const ProfileIcon = (props) => {
  const { style, size } = props;

  return (
    <div
      className="profile_icon"
      style={{
        ...style,
        minWidth: size || '40px',
        width: size || '40px',
        minHeight: size || '40px',
        height: size || '40px',
      }}
    />
  );
};

export default ProfileIcon;
