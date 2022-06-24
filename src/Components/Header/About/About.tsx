import React from 'react';
import './About.scss';

export const About: React.FC = () => (
  <div className="About">
    <h1 className="About__title">About me</h1>
    <img
      src="lementarev.jpeg"
      alt="avatar"
      className="About__avatar"
    />
    <p className="About__maintext">
      I know how important the details are for a Front-end developer.
      My keen attention to details and dedication to solving any problem at hand
      are what separates me from other candidates with similar qualifications.
    </p>
    <h2 className="About__category">SKILLS</h2>
    <ul>
      <li className="About__text">React, Redax, TypeScript, JavaScript</li>
      <li className="About__text">HTML5, CSS3, Sass, BEM, Bootstrap, Bulma</li>
      <li className="About__text">Fetch, REST API, Web sockets</li>
      <li className="About__text">Photoshop, Figma, Blender 3D</li>
      <li className="About__text">Git/Github, VSCode, DevTools</li>
      <li className="About__text">Solved 200+ algorithmic tasks</li>
      <li className="About__text">English: Intermediate</li>
    </ul>
    <h2 className="About__category">SOME FACTS</h2>
    <ul>
      <li className="About__text">Received the diploma of the best student of the faculty 🏆</li>
      <li className="About__text">Traveled 500 km on a bicycle in ONE day from Kyiv to Odesa 🚴</li>
      <li className="About__text">Winner of many cycling competitions 🏅</li>
      <li className="About__text">With good sense of humor, I like to joke with colleagues 😉</li>
      <li className="About__text">I love aviation but I&apos;m afraid of heights ✈️</li>
      <li className="About__text">Adventures lover 🧭🏔️⛺📸</li>
    </ul>
  </div>
);
