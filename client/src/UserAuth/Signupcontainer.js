import React, {Component} from 'react';
import $ from 'jquery';
import Signupform from './Signupform';
import {browserHistory} from 'react-router';

class Signupcontainer extends Component {
  state = {
    username: null,
    password: null
  }
  updateUsername = (username) => this.setState({ username })

  updatePassword = (password) => this.setState({ password })
  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    $.ajax({
      url:'/api/signup',
      method: 'POST',
      data: data
    }).done((data) => {
      if(data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
        browserHistory.push('/signup')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Sign Up! </h1>
        <Signupform updateUsername={this.updateUsername}
                    updatePassword={this.updatePassword}
                    handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
};

export default Signupcontainer;
