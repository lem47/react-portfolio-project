import React, { useState } from 'react';
import './HomePage.scss';

import { Footer } from './Footer/Footer';

export const HomePage: React.FC = () => {
  const [visitor, setVisitor] = useState('');
  const [meet, setMeet] = useState(false);
  const [visibleForm, setVisibleForm] = useState(true);

  return (
    <>
      <div className="HomePage">
        <h1 className="HomePage__title">Hello!</h1>
        <p>I am very glad to see you here 😊</p>
        <p>My name is Oleg</p>
        <p>Front-end developer from Ukraine 💛💙</p>
        <p>So, let&apos;s get acquainted!</p>
        {visibleForm ? (
          <>
            <p>What is your name?</p>
            <form
              className="HomePage__form"
              onSubmit={(event) => {
                event.preventDefault();
                setMeet(true);
                setVisibleForm(false);
              }}
            >
              <input
                type="text"
                className="HomePage__input"
                placeholder="Enter your name"
                value={visitor}
                onChange={(event) => {
                  setVisitor(event.target.value.trim().toUpperCase());
                }}
                required
              />
              <button type="submit" className="HomePage__button">
                Say hi!
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
        <p className="HomePage__friend">
          {meet && `Nice to meet you, ${visitor}!`}
        </p>
        {meet && (
          <>
            <p>Now we are friends</p>
            <p>You can start exploring my little WEB-world 🌍</p>
            <p>Enjoy!</p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
