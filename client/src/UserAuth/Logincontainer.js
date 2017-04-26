import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Loginsignupform from './Loginsignupform';

const Logincontainer = () =>
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
          browserHistory.push('/loginsignup')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Login! </h1>
        <Loginsignupform updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  };

export default Logincontainer;
