import React from 'react';
import { Link } from 'react-router';

const HomePage = () =>
  <div className='homelanding-page'>
    <div className='homepage-title'>
      <h1> PET QUESTER </h1>
      <p> Come join the adventure of a lifetime! </p>
      <Link to="/story" className='play-button' type='button'>PLAY NOW!</Link>
    </div>
  </div>

export default HomePage;
