import React, { Component } from 'react';
import NavBar from './NavBar';
import GetUser from './getUserContext';

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <GetUser>
          <NavBar />
          <div className="container">
          {this.props.children}
          </div>
        </GetUser>
      </div>
    );
  }
}

export default App;
