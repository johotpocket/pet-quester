import React from 'react';
import { Link } from 'react-router';

const NoLoggedIn = () =>
  <div>
    <h4> You are not logged in. Bummer </h4>
    <Link className="btn button-alarm" to="/login">Log in here!</Link>
  </div>

export default NoLoggedIn;
