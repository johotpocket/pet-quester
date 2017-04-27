import React, { Component } from 'react';
import NavBar from './NavBar';
import GetUser from './getUserContext';

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
    console.log("found context greeting", this.context.greeting);
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
