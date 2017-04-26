import React from 'react';
import $ from 'jquery';
import Loginsignupform from './Loginsignupform';
import {browserHistory} from 'react-router';

const Signupcontainer = () =>
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
        browserHistory.push('/loginsignup')
      }
    })
  }
  render() {
    return(
      <div>
        <h1> Sign Up! </h1>
        <Loginsignupform updateUsername={this.updateUsername}
                    updatePassword={this.updatePassword}
                    handleSubmit={this.handleSubmit}
        />
      </div>
    )
  };

export default Signupcontainer;
