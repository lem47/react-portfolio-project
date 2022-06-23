import React from 'react';
import './Modal.scss';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = ({ active, setActive, children }) => (
  <div
    className={active ? 'Modal active' : 'Modal'}
    onClick={() => setActive(false)}
    aria-hidden="true"
  >
    <div
      className={active ? 'Modal__content active' : 'Modal__content'}
      onClick={e => e.stopPropagation()}
      aria-hidden="true"
    >
      {children}
    </div>
  </div>
);
