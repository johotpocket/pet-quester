import React, {Component} from 'react';

class ChoicesContainer extends Component {
  state = {
    text: null,
    nextScene: null
  }
  handleSubmit = this.handleSubmit.bind(this)
  updateText = (text) => this.setState({ text })
  updateNextScene = (nextScene) => this.setState({ nextScene })

  handleSubmit(e){
    e.preventDefault();
    const data = {
      text: this.state.text,
      nextScene: this.state.nextScene
    }
  }
  componentDidMount() {
    this.loadAllChoicesFromServer()
  }
  loadAllChoicesFromServer() {
    fetch(`/api/choices/${this.props.params.choice_id}`)
      .then(blob => blob.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h4> Choice Selector </h4>
      </div>
    )
  }
}

export default ChoicesContainer;
