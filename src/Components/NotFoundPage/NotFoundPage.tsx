import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <div className="NotFoundPage">
    <img
      src="oops.gif"
      alt="oops, page not found"
      className="NotFoundPage__gif"
    />
    <Link
      to="/"
      className="NotFoundPage__link"
    >
      This button was created to help you
    </Link>
  </div>
);
