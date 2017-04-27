import React, {Component} from 'react';

class GetUser extends Component {
  getChildContext() {
    return {greeting: "hello"}
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

GetUser.childContextTypes = {
  greeting: React.PropTypes.string
}

export default GetUser;
