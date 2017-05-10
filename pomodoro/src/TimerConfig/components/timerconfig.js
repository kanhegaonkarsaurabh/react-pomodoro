import React from 'react';

const TimerConfig = () => (
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
);

export default TimerConfig;
