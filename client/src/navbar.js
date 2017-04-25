import React, { Component } from 'react';
import { Link } from 'react-router';

const NavBar = () =>
  <div>
    <nav>
      <div className='navbar'>
        <Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
        <Link to="/story" activeClassName="active-nav-btn" className="nav-item"> Story </Link>
      </div>
    </nav>
  </div>


export default NavBar;
