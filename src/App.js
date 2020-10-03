import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List</h2>
        </div>
        <ul>
            <li class="list-item">Go to market</li>
            <li class="list-item">Buy food</li>
            <li class="list-item">Make dinner</li>
        </ul>
      </div>
    );
  }
}

export default App;
