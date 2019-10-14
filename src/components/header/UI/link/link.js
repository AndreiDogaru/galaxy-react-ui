import React from 'react';
import { NavLink } from 'react-router-dom';

import './link.css';

const HeaderLink = (props) => {
  return (
    <NavLink 
      className="link"
      exact
      to={props.route}
      activeClassName="active"
    >
      {props.icon}
      <p>{props.title}</p>
    </NavLink>
  );
};

export default HeaderLink;