import React from 'react';
import TimerHeader from '../../TimerHeader/components/timerheader';
const Timer = () =>
   (
    <div className="container-fluid">
      <TimerHeader />
      <div className="row">
        <h2 className="text-center">00:00:00</h2>
      </div>
      <div className="row">
        <button className="btn btn-success center-block">Start</button>
      </div>
      <div className="row">
        <h3 className="text-primary">Set Timer</h3>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="hours"> Hours </label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="hours" />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="minutes" />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="seconds"> Seconds </label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="seconds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Timer;
