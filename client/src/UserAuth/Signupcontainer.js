import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Signupform from './Signupform';

class Signupcontainer extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = this.handleSubmit.bind(this)
  onFieldChange = this.onFieldChange.bind(this)

  updateEmail = (email) => this.setState({ email })
  updatePassword = (password) => this.setState({ password })

  onFieldChange(fieldName, fieldValue) {
  const newState = {};
  newState[fieldName] = fieldValue;
  this.setState(newState);
}

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      email: this.state.email,
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
        <Signupform updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                    handleSubmit={this.handleSubmit}
                    onFieldChange={this.onFieldChange}
        />
      </div>
    )
  }
};

export default Signupcontainer;
