import React from 'react';
import { useLocation } from 'react-router-dom';

import './profile-card.scss';

// Store here all paths for which this component should be visible
const visiblePaths = ['/'];

const ProfileCard = (props) => {
  let location = useLocation();

  if (visiblePaths.indexOf(location.pathname) === -1) {
    return null;
  }

  return (
    <div className="card">
      <div className="profile_image"></div>
      <h4>Andrei Dogaru</h4>
      <p>Senior Web Developer</p>
      <button className="secondary_button">
        <p>View Profile</p>
      </button>
    </div>
  );
};

export default ProfileCard;