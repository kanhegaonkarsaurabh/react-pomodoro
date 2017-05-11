import React from 'react';
import * as timerStates from '../../timerStates';
// LeftPad function so as to give the timer display a proper digital clock feeling
const leftPad = (val) => {
  if (val < 10)
    return `0${val}`;
  else
    return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div className="row center-block">
      {
        (props.timerState === timerStates.COMPLETE)
        && <iframe width="560" height="315" src="https://www.youtube.com/embed/iNpXCzaWW1s?autoplay=1&start=1&controls=0&showinfo=0"></iframe>
      }
    </div>
    <div className="row">
      <h2 className="text-center">
        {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);

export default TimerDisplay ;
