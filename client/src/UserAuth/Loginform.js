import React from 'react';

const Loginform = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Username</label>
        <input onChange={ (event) => props.updateUsername(event.target.value)} type="text" className=""/>
      </div>
      <div>
        <label>Password</label>
        <input onChange={ (event) => props.updatePassword(event.target.value)} type="password" className=""/>
      </div>
      <button type="submit" className="btn btn-default">Login!</button>
    </form>
  </div>

export default Loginform;
