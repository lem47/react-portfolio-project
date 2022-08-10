import React from 'react';
import './ProjectsPage.scss';

import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => (
  <div className="ProjectsPage">
    <h1 className="ProjectsPage__title">React projects:</h1>
    <a
      href="https://mern-trains-schedule-app.herokuapp.com/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Trains schedule app (MERN)
    </a>
    <a
      href="https://lem47.github.io/delivery-app/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Delivery app
    </a>
    <a
      href="https://lem47.github.io/loans_chi-software_code-test/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Loans app
    </a>
    <a
      href="https://lem47.github.io/memoria-press-app-test/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      School journal
    </a>
    <Link
      to="/clock"
      className="ProjectsPage__link"
    >
      The Matrix clock
    </Link>
    <a
      href="https://lem47.github.io/react_list-of-goods-hooks/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      List of goods with sorting
    </a>
    <Link
      to="/goods"
      className="ProjectsPage__link"
    >
      Dynamic list of goods
    </Link>
    <Link
      to="/people"
      className="ProjectsPage__link"
    >
      Fetching people from server
    </Link>
    <a
      href="https://lem47.github.io/react_counter/"
      rel="noreferrer"
      target="_blank"
      className="ProjectsPage__link"
    >
      Counter (with funny sound inside)
    </a>
    <Link
      to="/slider"
      className="ProjectsPage__link"
    >
      Photo slider
    </Link>

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
    <br />
    <Link
      to="/contacts"
      className="ProjectsPage__nextstep"
    >
      Like it? Tell me!
    </Link>
  </div>
);
