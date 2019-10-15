import React from 'react';
import { NavLink } from 'react-router-dom';

import './link.scss';

const HeaderLink = (props) => {
  const { route, icon, title } = props;

  return (
    <NavLink
      className="link"
      exact
      to={route}
      activeClassName="active"
    >
      {icon}
      <p>{title}</p>
    </NavLink>
  );
};

export default HeaderLink;
