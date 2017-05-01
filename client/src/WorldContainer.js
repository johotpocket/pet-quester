import React, {Component} from 'react';
import WorldList from './WorldList';
import SceneContainer from './SceneContainer';

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
          <SceneContainer />
        </div>
      </div>
    )
  }
}

export default WorldContainer;
