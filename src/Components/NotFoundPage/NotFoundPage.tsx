import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <div className="NotFoundPage">
    <img
      src="https://media4.giphy.com/media/pVUPZS2Vj5GXfdBeKs/giphy.gif?cid=790b76117a0092eed1453634694416997582044132067f1e&rid=giphy.gif&ct=ts"
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
