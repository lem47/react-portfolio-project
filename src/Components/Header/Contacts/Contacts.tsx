import React from 'react';
import './Contacts.scss';

export const Contacts: React.FC = () => (
  <div className="Contacts">
    <img
      src="callme.gif"
      alt="call me please"
      className="Contacts__gif"
    />
    <h1 className="Contacts__title">My contacts:</h1>
    <a
      href="tel:+380500848001"
      className="Contacts__link"
    >
      +380500848001
    </a>
    <a
      href="https://t.me/lementarev"
      rel="noreferrer"
      target="_blank"
      className="Contacts__link"
    >
      TELEGRAM: @lementarev
    </a>
    <a
      href="https://www.instagram.com/lementarev/"
      rel="noreferrer"
      target="_blank"
      className="Contacts__link"
    >
      INSTAGRAM: @lementarev
    </a>
    <a
      href="mailto:lementarev@gmail.com"
      className="Contacts__link"
    >
      GMAIL: lementarev@gmail.com
    </a>
    <a
      href="https://linkedin.com/in/oleg-lementarev"
      rel="noreferrer"
      target="_blank"
      className="Contacts__link"
    >
      LINKEDIN: linkedin.com/in/oleg-lementarev
    </a>
    <a
      href="https://github.com/lem47"
      rel="noreferrer"
      target="_blank"
      className="Contacts__link"
    >
      GITHUB: github.com/lem47
    </a>
  </div>
);
