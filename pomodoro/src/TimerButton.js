import React, {Component} from 'react';
import * as timerStates from './timerStates.js';


class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);

    this.state = {
      splitTime : [],
      counter : -1,
    };
  }

  leftPad = (val) => {
    if (val < 10)
      return `0${val}`;
    else
      return `${val}`;
  }

  splitTimer = () => {
    var newArr = this.state.splitTime;
    console.log(newArr);
    newArr.push(`${this.leftPad(this.props.currentTime.get('hours'))}:${this.leftPad(this.props.currentTime.get('minutes'))}:${this.leftPad(this.props.currentTime.get('seconds'))}`);

    this.setState({
      splitTime : newArr,
      counter : this.state.counter + 1 ,
    });
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET) return (<button className="btn btn-success center-block" onClick = {this.props.startTimer}>Start</button>);
    if (this.props.timerState === timerStates.RUNNING) return (
      <div className = "container-fluid">
        <button className="btn btn-danger center-block col-xs-6 btn-group-sm left-button" onClick = {this.props.stopTimer}>
          Interrupt
        </button>
        <button className="btn btn-primary center-block col-xs-6 right-button" onClick = {this.splitTimer}>Split</button>
        { this.state.splitTime[this.state.counter] }
      </div>
    );
    if (this.props.timerState === timerStates.COMPLETE) return (
      <div  >
        <button className="btn btn-info center-block" onClick = {this.props.stopTimer}>Reset</button>
        <h3 className = "text-secondary">
        Split Times : </h3>

        { this.state.splitTime }

      </div> );
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
