import React, {Component} from 'react';
import $ from 'jquery';
import Signupform from './Signupform';
import browserHistory from 'react-router';

class Signupcontainer extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = this.handleSubmit.bind(this)
  onFieldChange = this.onFieldChange.bind(this)

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
    console.log(data);
    $.ajax({
      url:'/api/signup',
      method: 'POST',
      data: data
    }).done((data) => {
        window.location = "/"
        browserHistory.push('/home')
      console.log(data)
    })
  }
  render() {
    return(
      <div>
        <h1> Sign Up! </h1>
        <Signupform handleSubmit={this.handleSubmit}
                    onFieldChange={this.onFieldChange}
        />
      </div>
    )
  }
};

export default Signupcontainer;
