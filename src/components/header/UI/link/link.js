import React from 'react';

import './link.css';

const Link = (props) => {
  return (
    <div className={`link ${props.isActive ? 'active' : ''}`}>
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
};

export default Link;