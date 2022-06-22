import React from 'react';
import './ProjectsPage.scss';

import { NavLink } from 'react-router-dom';

export const ProjectsPage: React.FC = () => (
  <div className="ProjectsPage">
    <h1 className="ProjectsPage__title">My projects:</h1>
    <NavLink
      className="ProjectsPage__link"
      to="/people"
    >
      Fetching people from server
    </NavLink>

    <NavLink
      className="ProjectsPage__link"
      to="/goods"
    >
      Dynamic list of goods
    </NavLink>

    <NavLink
      className="ProjectsPage__link"
      to="/clock"
    >
      Matrix clock
    </NavLink>
  </div>
);
