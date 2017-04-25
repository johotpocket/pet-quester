import React, { Component } from 'react';
import HomePage from './Containers/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> The game </h2>
      <div className='homelanding-page'>
        <div className='homepage-title'>
          <h1> Game Name </h1>
          <p> Come join the adventure of a lifetime! </p>
          <button className='play-button' type='button'>PLAY NOW!</button>
        </div>
      </div>
    );
  }
}

export default App;
