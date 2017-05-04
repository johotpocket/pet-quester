import React, {Component} from 'react';
import { Link } from 'react-router';



class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='home-header'>
          <h1 className='game-name'> Pet Quester </h1>
          <p className='adventure-home'> Come join the adventure of a lifetime! </p>
          <Link to="/story" className='play-button' type='button'>PLAY NOW!</Link>
        </div>
        <div className='home-about'>
          <h2>Welcome!</h2>
          <p> About? </p>
        </div>
      </div>
    )
  }
}


export default HomePage;
