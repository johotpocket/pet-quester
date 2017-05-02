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
          {this.props.children}
        </GetUser>
      </div>
    );
  }
}

export default App;
