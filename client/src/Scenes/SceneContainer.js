import React, {Component} from 'react';
import SceneCard from './SceneCard';

class SceneContainer extends Component {
  state = {
    scene: null
  }

  componentDidMount() {
    this.loadSceneFromServer()
  }
  loadSceneFromServer() {
    fetch(`/api/scene/${this.props.params.scene_id}`)
      .then(blob => blob.json())
      .then(data => this.setState({ scene: data }))
  }
  render() {
    return(
      <div className="container">
        { this.state.scene ? <SceneCard scene={this.state.scene} greeting={"hello world"}/> : null }
      </div>
    )
  }
}


export default SceneContainer;
