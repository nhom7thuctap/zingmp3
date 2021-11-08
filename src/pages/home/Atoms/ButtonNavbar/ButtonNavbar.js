import React from 'react';
import { NavLink } from 'react-router-dom';
import './buttonNavbar.scss';

export default function ButtonNavbar(props) {
  const { text, link } = props;
  return (
    <NavLink
      to={link}
      exact={true}
      activeClassName="navbar_active"
      className="navbar-item"
    >
      {text}
    </NavLink>
  );
}
