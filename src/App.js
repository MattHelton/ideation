import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='header'>
          <button id='btn' onClick='generate()'>Generate Idea</button>
        </div>
      </div>
    );
  }
}

export default App;
