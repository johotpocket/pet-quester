import React, {Component} from 'react';
import $ from 'jquery';
import WorldList from './WorldList';

class WorldContainer extends Component {
  state = {
    worlds: null
  }
  componentDidMount() {
    this.loadAllWorldsFromServer()
  }
  loadAllWorldsFromServer() {
    fetch(`/api/worlds/`)
      .then(blob => blob.json())
      .then(worlds => this.setState({ worlds }))
  }
  render() {
    return (
      <div>
        <div>
          <h4> the world selector </h4>
        </div>
        <div>
          { this.state.worlds ? <WorldList worlds={this.state.worlds}/> : null }
        </div>
      </div>
    )
  }
}

export default WorldContainer;
