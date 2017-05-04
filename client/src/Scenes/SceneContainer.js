import React, {Component} from 'react';
import SceneCard from './SceneCard';
import NoLoggedIn from '../UserAuth/NoLoggedIn';

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
      <div>
        { this.props.user && this.props.user.message !== "no logged in" && this.state.scene ? <SceneCard scene={this.state.scene}/> : <NoLoggedIn/> }
      </div>
    )
  }
}


export default SceneContainer;
