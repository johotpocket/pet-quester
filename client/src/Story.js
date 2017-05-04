import React, {Component} from 'react';
import { Link } from 'react-router';

class Story extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron story-jumbo'>
          <h1> Your story begins here...</h1>
        </div>
        <div className='about-story'>
          <p> No memories of before, no memory of who you are... you awake with only the clothes on your back
          and a vague sense of unease. As your eyes focus to the dim candle-lit light, you take in your surroundings.
          A comfy but simple and old looking couch is underneath you, and stone walls surround you in a small room.
          Two large oak doors are opposite to you. Sunlight streamsthrough a small open window, and small birds can be heard
          chirping away. You glimpse the tops of trees outside, too. Curiously, you wander over to each door and open them
          slightly. It looks as if one leads into the castle, while the other leads outside to the forest. You now know
          you can either stay in the castle to explore or you may leave and wonder through the forest. One may leave you
          empty handed, but you must choose. Are you up for the adventure?
          </p>
        </div>
        <div className='instructions-story'>
         <h2> Instructions </h2>
         <p> The rules are simple, there are none. You will be playing a link style game, which means you will
         go from adventure to adventure by clicking on one of the link options. Some links will lead you to success,
         while oters may lead you to failure, maybe even death! So, choose wisley and do not forget to log in before
         you start your game. That way you can save your progess or restart if you take a wrong turn. Good luck and
         have fun! Click on the link below to start!</p>
        </div>
        <Link to='/worlds'>Start Your Adventure</Link>
      </div>
    );
  }
}

export default Story;
