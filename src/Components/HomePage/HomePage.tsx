import React from 'react';
import './HomePage.scss';

import { Footer } from './Footer/Footer';

export const HomePage: React.FC = () => (
  <>
    <div className="HomePage">
      <h1 className="HomePage__title">Hello!</h1>
      <p>My name is Oleg</p>
    </div>
    <Footer />
  </>

);
