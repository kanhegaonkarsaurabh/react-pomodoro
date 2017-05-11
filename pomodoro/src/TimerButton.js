import React, {Component} from 'react';
import * as timerStates from './timerStates.js';

class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET) return (<button className="btn btn-success center-block" onClick = {this.props.startTimer}>Start</button>);
    if (this.props.timerState === timerStates.RUNNING) return (<button className="btn btn-danger center-block" onClick = {this.props.stopTimer}>Interrupt</button>);


}

  render() {
    return (
    <div className="row">
        {this.getButton()}
    </div>
    );
  }
}

export default TimerButton;
