import React, {Component} from 'react';

class SceneContainer extends Component {
  state = {
    startingScene: null,
    typeOfScene: null,
    description: null
  }
  handleSubmit = this.handleSubmit.bind(this)
  updateStartingScene = (startingScene) => this.setState({ startingScene })
  updateTypeOfScene = (typeOfScene) => this.setState({ typeOfScene })
  updateDescription = (description) => this.setState({ description })

  handleSubmit(e){
    e.preventDefault();
    const data = {
      startingScene: this.state.startingScene,
      typeOfScene: this.state.typeOfScene,
      description: this.state.description
    }
  }
  componentDidMount() {
    this.loadAllScenesFromServer()
  }
  loadAllScenesFromServer() {
    fetch(`/api/scene/:scene_id`)
      .then(blob => blob.json())
      .then(startingScene => this.setState({ startingScene: startingScene.startingScene }))
      .then(typeOfScene => this.setState({ typeOfScene: typeOfScene.typeOfScene }))
      .then(description => this.setState({ description: description.description }))
  }
  render() {
    return(
      <div>
        <h4> Scene Selector </h4>
      </div>
    )
  }
}


export default SceneContainer;
