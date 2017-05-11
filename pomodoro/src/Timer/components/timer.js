import React, { Component } from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/timerheader';
import TimerDisplay from '../../TimerDisplay/components/timerdisplay';
import TimerButton from '../../TimerButton';
import TimerConfig from '../../TimerConfig/components/timerconfig';
import * as timerStates from '../../timerStates';
class Timer extends Component {
  constructor() {
    super();

    this.state = {
      currentTime : moment.duration(25,'minutes'),
      baseTime : moment.duration(25,'minutes'),
      timerState : timerStates.NOT_SET,
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime : newBaseTime,
      currentTime : newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState : timerStates.RUNNING,
    });
  }

  render() {
     return (
      <div className="container-fluid">
        <TimerHeader />
        <TimerDisplay currentTime={this.state.currentTime} />
        <TimerButton startTimer = {this.startTimer}/>
        {
          (this.state.timerState !== timerStates.RUNNING)
            &&
            (<TimerConfig
              baseTime = {this.state.baseTime}
              setBaseTime = {this.setBaseTime}
            />)
        }
      </div>
     );
  }
}
export default Timer;
