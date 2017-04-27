import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const NavBar = (props, context) =>
  <div>
    <nav>
      <div className='navbar'>
        <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
        <Link to="/story" activeClassName="active-nav-btn" className="nav-item"> Story </Link>
        <Link to="/login" activeClassName="active-nav-btn" className="nav-item"> Login </Link>
        <Link to="/signup" activeClassName="active-nav-btn" className="nav-item"> Signup </Link>
          <h1> {context.greeting} </h1>
      </div>
    </nav>
  </div>

NavBar.contextTypes = {greeting: PropTypes.string}
export default NavBar;
