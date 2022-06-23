import React, { useState } from 'react';
import './HomePage.scss';

import { Footer } from './Footer/Footer';
import { Modal } from '../Modal/Modal';

export const HomePage: React.FC = () => {
  const [visitor, setVisitor] = useState('');
  const [visibleForm, setVisibleForm] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="HomePage">
        <h1 className="HomePage__title">Hello!</h1>
        <p>I am very glad to see you here 😊</p>
        <p>My name is Oleg</p>
        <p>Front-end developer from Ukraine 💛💙</p>
        {visibleForm ? (
          <>
            <p> </p>
            <p> </p>
            <p>So, let&apos;s get acquainted!</p>
            <p>What is your name?</p>
            <form
              className="HomePage__form"
              onSubmit={(event) => {
                event.preventDefault();
                setVisibleForm(false);
                setModalActive(true);
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
          <p>Welcome!</p>
        )}
      </div>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          {`Nice to meet you, ${visitor}!`}
        </p>
        <p>Now we are friends</p>
        <p>You can start exploring my little WEB-world 🌍</p>
        <a href="/#/projects" className="HomePage__link">Enjoy!</a>
      </Modal>
    </>
  );
};
