import React, {Component} from 'react';
import { Link } from 'react-router';

class Story extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className='story-title'> Your story begins here </h1>
        </div>
        <p> No memories of before, no memory of who you are... you awake with only the clothes on your back
        and a vague sense of unease. As your eyes focus to the dim candle-lit light, you take in your surroundings.
        A comfy but simple and old looking couch is underneath you, and stone walls surround you in a small room.
        A large oak door is opposite to you.
        Sunlight streamsthrough a small open window, and small birds can be heard chirping away. You glimpse the tops of
        trees outside, too.
        </p>
        <Link to='/worlds'>Start Your Adventure</Link>
      </div>
    );
  }
}

export default Story;
