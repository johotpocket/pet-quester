import React, {Component} from 'react';
import { Link } from 'react-router';

class Story extends Component {
  render() {
    return (
      <div>
      <h1 className='story-header'> Your story begins here...</h1>
      <div>
        <p className='story-page-container'> No memories of before, no memory of who you are... you awake with only the clothes on your back
        and a vague sense of unease. As your eyes focus to the dim candle-lit light, you take in your surroundings.
        A comfy but simple and old looking couch is underneath you, and stone walls surround you in a small room.
        Two large oak doors are opposite to you. Sunlight streamsthrough a small open window, and small birds can be heard
        chirping away. You glimpse the tops of trees outside, too. Curiously, you wander over to each door and open them
        slightly. It looks as if one leads into the castle, while the other leads outside to the forest. You now know
        you can either stay in the castle to explore or you may leave and wonder through the forest. There could be
        clues in the castle or forest to help you figure out who you are and where you came from.
        One may leave you empty handed, but you must choose. Which shall it be?
        </p>
      </div>
      <Link to='/worlds'>Start Your Adventure</Link>
      </div>
    );
  }
}

export default Story;
