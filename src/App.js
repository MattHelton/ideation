import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Generate from './components/Generate.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='header'>
          <button id='btn' onClick={Generate.chooseIdea()}>Generate Idea</button>
          <div id='generate'></div>
        </div>
      </div>
    );
  }
}



export default App;