import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <div className="NotFoundPage">
    <img
      src="oops.gif"
      alt="oops, page not found"
      className="NotFoundPage__gif"
    />
    <NavLink
      className="NotFoundPage__link"
      to="/"
    >
      This button was created to help you
    </NavLink>
  </div>
);
