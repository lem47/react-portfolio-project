/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

import { Footer } from './Footer/Footer';
import { Modal } from '../Modal/Modal';

const debounce = (f: any, delay: any) => {
  let timerId: any;

  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...args);
  };
};

export const HomePage: React.FC = () => {
  const [visitor, setVisitor] = useState('');
  const [appliedVisitor, setAppliedVisitor] = useState('');
  const [visibleForm, setVisibleForm] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  const applyVisitor = useCallback(
    debounce(setAppliedVisitor, 1000),
    [],
  );

  return (
    <>
      <div className="HomePage">
        <h1 className="HomePage__title">Hello!</h1>
        <p className="HomePage__text">I am very glad to see you here 😊</p>
        <p className="HomePage__text">My name is Oleg</p>
        <p className="HomePage__text">Front-end developer from Ukraine 💛💙</p>
        {visibleForm ? (
          <>
            <br />
            <br />
            <p className="HomePage__text">So, let&apos;s get acquainted!</p>
            <p className="HomePage__text">What is your name?</p>
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
                  applyVisitor(event.target.value.trim());
                }}
                required
              />
              <button
                type="submit"
                className={appliedVisitor ? 'HomePage__button active' : 'HomePage__button'}
              >
                say hi!
              </button>
            </form>
          </>
        ) : (
          <p className="HomePage__text">Welcome!</p>
        )}
      </div>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="HomePage__text">
          {`Nice to meet you, ${visitor}!`}
        </p>
        <p className="HomePage__text">Now we are friends</p>
        <p className="HomePage__text">You can start exploring my little WEB-world 🌍</p>
        <Link
          to="/about"
          className="HomePage__link"
        >
          Enjoy!
        </Link>
      </Modal>
    </>
  );
};
