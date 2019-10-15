import React from 'react';
import { useLocation } from 'react-router-dom';

import './profile-card.scss';
import FooterLinks from '../footer-links/footer-links';

// Store here all paths for which this component should be visible
const visiblePaths = ['/'];

const ProfileCard = () => {
  const location = useLocation();

  if (visiblePaths.indexOf(location.pathname) === -1) {
    return null;
  }

  return (
    <div className="profile_card_container">
      <div className="card">
        <div className="profile_image" />
        <h4>Andrei Dogaru</h4>
        <p>Senior Web Developer</p>
        <button type="button" className="secondary_button">
          <p>View Profile</p>
        </button>
      </div>

      <FooterLinks />
    </div>
  );
};

export default ProfileCard;
