import React from 'react';

const Loginform = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Email</label>
        <input onChange={ (event) => props.onFieldChange("title", event.target.value)} type="email" className=""/>
      </div>
      <div>
        <label>Password</label>
        <input onChange={ (event) => props.onFieldChange("password", event.target.value)} type="password" className=""/>
      </div>
      <button type="submit" className="btn btn-default">Login!</button>
    </form>
  </div>

export default Loginform;
