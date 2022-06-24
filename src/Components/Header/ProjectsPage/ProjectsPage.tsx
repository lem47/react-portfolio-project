import React from 'react';
import './ProjectsPage.scss';

import { NavLink } from 'react-router-dom';

export const ProjectsPage: React.FC = () => (
  <div className="ProjectsPage">
    <h1 className="ProjectsPage__title">My React projects:</h1>
    <NavLink
      className="ProjectsPage__link"
      to="/clock"
    >
      The Matrix clock
    </NavLink>
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
    <a
      href="https://lem47.github.io/react_list-of-goods-hooks/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      List of goods with sorting
    </a>
    <a
      href="https://lem47.github.io/react_counter/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Counter (with funny sound inside)
    </a>

    <h1 className="ProjectsPage__title">Landing pages:</h1>
    <a
      href="https://lem47.github.io/creative-bakery/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Creative Bakery
    </a>
    <a
      href="https://lem47.github.io/miami-landing/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Miami Condo Kings
    </a>
  </div>
);
