import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="panel panel-default app-content center-block">
          <div className="panel panel-body ">
            <div className="container-fluid">
              <div className="row">
                <h2 className="text-center">Pomodoro Timer</h2>
              </div>
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
          </div>
        </div>

    );
  }
}

export default App;
