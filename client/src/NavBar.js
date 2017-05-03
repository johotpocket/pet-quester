import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const NavBar = (props, context) =>
  <nav>
    <div className='navbar container'>
      <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
      <Link to="/login" activeClassName="active-nav-btn" className="nav-item"> Login </Link>
      <Link to="/signup" activeClassName="active-nav-btn" className="nav-item"> Signup </Link>
    </div>
  </nav>

NavBar.contextTypes = {greeting: PropTypes.string}
export default NavBar;
