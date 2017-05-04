import React from 'react';
import { Link } from 'react-router';

const NoLoggedIn = () =>
  <div className ='nologgedin-page'>
    <h4> You are not logged in. Bummer. Signup or login to continue! </h4>
    <Link className="btn button-alarm" to="/login">Log in here!</Link>
    <Link className="btn button-alarm" to="/signup">Sign up here!</Link>
  </div>

export default NoLoggedIn;
