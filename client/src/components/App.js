import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Today's Appointments</h1>
        </header>
        <Calendar />
      </div>
    );
  }
}

export default App;
