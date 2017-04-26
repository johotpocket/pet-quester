import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Story from './Story';
import Home from './HomePage';
import Logincontainer from './UserAuth/Logincontainer';
import Signupcontainer from './UserAuth/Signupcontainer';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/story' component={Story}/>
      <Route path='/login' component={Logincontainer}/>
      <Route path='/signup' component={Signupcontainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
