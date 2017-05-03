import React from 'react';
import { Link } from 'react-router';

const HomePage = () =>
  <div className='container'>
    <div className='jumbotron home-jumbo'>
      <h1> Pet Quester </h1>
      <p> Come join the adventure of a lifetime! </p>
      <Link to="/story" className='play-button' type='button'>PLAY NOW!</Link>
    </div>
    <div>
      <h2>Welcome!</h2>
      <p> About? </p>
    </div>
  </div>

export default HomePage;
