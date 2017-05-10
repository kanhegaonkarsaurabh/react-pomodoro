import React from 'react';
import TimerHeader from '../../TimerHeader/components/timerheader';
import TimerDisplay from '../../TimerDisplay/components/timerdisplay';
import TimerButton from '../../TimerButton';
import TimerConfig from '../../TimerConfig/components/timerconfig';
const Timer = () =>
   (
    <div className="container-fluid">
      <TimerHeader />
      <TimerDisplay />
      <TimerButton />
      <TimerConfig />
    </div>
  );

export default Timer;
