import React from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="Header">
    <nav className="Header__nav">
      <NavLink
        className="Header__navlink"
        to="/"
        exact
      >
        Welcome page
      </NavLink>

      <NavLink
        className="Header__navlink"
        to="/about"
      >
        About me
      </NavLink>

      <NavLink
        className="Header__navlink"
        to="/projects"
      >
        My projects
      </NavLink>

      <NavLink
        className="Header__navlink"
        to="/contacts"
      >
        My contacts
      </NavLink>
    </nav>
  </header>
);
