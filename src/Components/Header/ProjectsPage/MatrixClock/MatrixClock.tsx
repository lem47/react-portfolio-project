import React from 'react';
import './MatrixClock.scss';

import { Clock } from './Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

export class MatrixClock extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="ClockPage">
        <div className="MatrixClock">
          {isClockVisible && (<Clock name={clockName} />)}

          <div className="MatrixClock__buttons">
            <button
              className="MatrixClock__button"
              type="button"
              onClick={this.showClock}
              disabled={isClockVisible}
            >
              SHOW CLOCK
            </button>

            <button
              className="MatrixClock__button"
              type="button"
              onClick={this.renameClock}
              disabled={!isClockVisible}
            >
              SET RANDOM NAME
            </button>

            <button
              className="MatrixClock__button"
              type="button"
              onClick={this.hideClock}
              disabled={!isClockVisible}
            >
              HIDE CLOCK
            </button>
          </div>
        </div>
      </div>
    );
  }
}
