import React, { Component } from 'react';
import twitter from './twitter.svg';
import TweetsContainer from './components/TweetsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={twitter} className="App-logo" alt="logo" />
          <h1 className="App-title">Tweets Search Board</h1>
        </header>
        <br />
        <TweetsContainer perPage={10} />
      </div>
    );
  }
}

export default App;
