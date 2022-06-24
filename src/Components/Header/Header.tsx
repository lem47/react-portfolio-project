import React from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="Header">
    <nav className="Header__nav">
      <NavLink
        to="/"
        className="Header__navlink"
        exact
      >
        Welcome page
      </NavLink>
      <NavLink
        to="/about"
        className="Header__navlink"
      >
        About me
      </NavLink>
      <NavLink
        to="/projects"
        className="Header__navlink"
      >
        My projects
      </NavLink>
      <NavLink
        to="/contacts"
        className="Header__navlink"
      >
        My contacts
      </NavLink>
    </nav>
  </header>
);
