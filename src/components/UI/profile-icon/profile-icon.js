import React from 'react';

import './profile-icon.scss';

const ProfileIcon = (props) => {
  const { style } = props;

  return (
    <div className="profile_icon" style={style} />
  );
};

export default ProfileIcon;
