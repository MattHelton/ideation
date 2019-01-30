import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Generate from './components/Generate.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div><Generate /></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))




export default App;