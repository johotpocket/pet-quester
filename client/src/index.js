import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Story from './Story';
import Home from './HomePage';
import Loginform from './UserAuth/Loginform';
import Signupform from './UserAuth/Signupform';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/story' component={Story}/>
      <Route path='/login' component={Loginform}/>
      <Route path='/signup' component={Signupform}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
