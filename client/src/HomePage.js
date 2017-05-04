import React, {Component} from 'react';
import { Link } from 'react-router';



class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='home-header'>
          <h1 className='game-name'> Pet Quester </h1>
          <p className='adventure-home'> Come pet the adventure of a lifetime! </p>
          <Link to="/story" className='play-button' type='button'>PLAY NOW!</Link>
        </div>
        <div className='home-about'>
          <h2>About Pet-Quester</h2>
          <p> Hi there, Welcome to our game! Pet Quester was made by johotpocket and tdicomitis
          (github profiles, if you want to check us out). This game was made during our 12
          week full stack web development bootcamp(shoutout to Big Sky Code Academy) for
          our group project. the game is fairly simple, a link style adventure that takes you
          through different scenes and prompts you to make choices along the way. The
          idea was originally to do a text adventure, but when we started
          researching a little more, we found some cool link style games and were both intrigued
          by the idea of a link based story. It was important to create something we were both excited
          about. We hope you enjoy exploring this as much as we enjoyed building it!</p>
        </div>
      </div>
    )
  }
}


export default HomePage;
