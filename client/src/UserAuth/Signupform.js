import React from 'react';

const Signupform = (props) =>
  <div>
    <div className='signup-form'>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Username</label>
          <input onChange={ (event) => props.updateUsername(event.target.value)} type="text" className=""/>
        </div>
        <div>
          <label>Password</label>
          <input onChange={ (event) => props.updatePassword(event.target.value)} type="password" className=""/>
        </div>
        <button type="submit" className="btn btn-default">Sign Up!</button>
      </form>
    </div>
</div>

export default Signupform;
