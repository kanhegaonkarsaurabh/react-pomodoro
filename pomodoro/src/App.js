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
                <h3 className="text-primary">Set Timer</h3>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
