import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Loginform from './Loginform';

class Logincontainer extends Component {
  state = {
    username: null,
    password: null
  }
  updateUsername = (username) => this.setState({ username })

  updatePassword = (password) => this.setState({ password })
  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    $.ajax({
      url:'/api/login/',
      method: 'POST',
      data: data
    }).done((data) => {
      if (data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
          browserHistory.push('/login')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Login! </h1>
        <Loginform updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
};

export default Logincontainer;
