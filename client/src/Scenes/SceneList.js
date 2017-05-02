import React, {Component} from 'react';
import SceneCard from './SceneCard';

class SceneList extends Component {
  render() {
    const sceneCards = this.props.scenes.map((item, index) => {
      return <SceneCard description={item.description} />
    })
    return (
      <div>
        {sceneCards}
      </div>
    )
  }
}

export default SceneList;
