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
          <h2>About!</h2>
          <p> Hi there! Welcome to our game! Pet Quester was made by johotpocket and tdicomitis
          (github profiles, if you want to check us out). This game was made during our 12
          week full stack web development bootcamp(shoutout to Big Sky Code Academy) for
          our group project. The game play is very simple, a link style game that takes you
          through different adventures and prompts you to make choices along the way. The
          idea for our game was originally to do a text adventure game, but when we started
          researching a little more, we found some cool link style games and were both intrigued
          by the idea of a link base game. It was important to create something we were both excited
          about. Hope you enjoy the game as much as we did building it!</p>
        </div>
      </div>
    )
  }
}


export default HomePage;
