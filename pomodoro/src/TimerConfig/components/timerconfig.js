import React, { Component } from 'react';


class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;
    if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
    if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
    if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="row">
        <h3 className="text-primary">Set Timer</h3>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="hours"> Hours </label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="hours"
              defaultValue={this.props.baseTime.get('hours')}
              onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="minutes"
              defaultValue={this.props.baseTime.get('minutes')}
              onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="seconds"> Seconds </label>
            </div>
            <div className="col-sm-9">
              <input className="form-control" type="number" id="seconds"
              defaultValue={this.props.baseTime.get('seconds')}
              onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerConfig;
