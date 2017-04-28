import React, {Component} from 'react';
import WorldCard from './WorldCard';

class WorldList extends Component {
  render() {
    const worldCards = this.props.worlds.map((item, index) => {
      return <WorldCard title={item.title} id={item._id}
      key={index}
      />
    })
    return (
      <div>
        { worldCards }
      </div>
    )
  }
}

export default WorldList;
