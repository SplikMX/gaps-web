import React, { Component } from 'react';
import logo from './logoW.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Próximamente, Viaja seguro.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
