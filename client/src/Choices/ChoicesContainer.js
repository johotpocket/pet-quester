import React, {Component} from 'react';
import ChoicesCard from './ChoicesCard';

class ChoicesContainer extends Component {
  state = {
    choices: null
  }
  componentDidMount() {
    this.loadChoicesFromServer()
  }
  loadChoicesFromServer() {
    fetch(`/api/choices/${this.props.params.choice_id}`)
    .then(blob => blob.json())
    .then(data => this.setState({ choices: data }))
  }
  render() {
    return(
      <div>
        { this.state.choices ? <ChoicesCard /> : null }
      </div>
    )
  }
}

export default ChoicesContainer;
