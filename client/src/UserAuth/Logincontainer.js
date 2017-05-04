
import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Loginform from './Loginform';
import PropTypes from 'prop-types';

class Logincontainer extends Component {
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
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    $.ajax({
      url:'/api/login/',
      method: 'POST',
      data: data
    }).done((data) => {
      if (data._id) {
        window.location = "/"
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
        <Loginform   handleSubmit={this.handleSubmit}
                     onFieldChange={this.onFieldChange}
        />
        <h4> {this.context.greeting} </h4>
      </div>
    )
  }
};

Logincontainer.contextTypes = {greeting: PropTypes.string}

export default Logincontainer;
