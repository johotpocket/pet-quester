import React, {Component} from 'react';
import SceneCard from './SceneCard';

class SceneContainer extends Component {
  state = {
    scene: null
  }

  componentDidMount() {
    this.loadSceneFromServer()
  }
  componentDidUpdate (prevProps) {
      let oldId = prevProps.params.scene_id
      let newId = this.props.params.scene_id
      if (newId !== oldId){
        this.loadSceneFromServer(this.props.params.scene_id)
      }
  }
  loadSceneFromServer() {
    fetch(`/api/scene/${this.props.params.scene_id}`)
      .then(blob => blob.json())
      .then(data => {
        console.log(data, 'scene loaded from scene container')
        this.setState({ scene: data })
      }
    )
  }
  render() {
    return(
      <div className="container my-container">
        { this.state.scene ? <SceneCard scene={this.state.scene}/> : null }
      </div>
    )
  }
}


export default SceneContainer;
