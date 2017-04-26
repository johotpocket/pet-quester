import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Story from './Story';
import Home from './HomePage';
import Loginsignup from './Loginsignup';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/story' component={Story}/>
      <Route path='/loginsignup' component={Loginsignup}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
