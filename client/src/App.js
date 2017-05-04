import React, { Component } from 'react';
import NavBar from './NavBar';
import GetUser from './getUserContext';
import $ from 'jquery';

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  state = {
    user: null
  }
  componentDidMount() {
    this.getUser()
  }
  getUser(){
    $.ajax({
      url: '/api/get_user',
      method: "GET"
    }).done(data => {
      this.setState({user: data})
      console.log(data, "USER GOT")
    })
  }
  render() {
    return (
      <div>
        <GetUser>
          <NavBar />
          <div className="container">
          { this.state.user ?
          React.cloneElement(this.props.children, {
            user: this.state.user
          }) : null }
          </div>
        </GetUser>
      </div>
    );
  }
}

export default App;
