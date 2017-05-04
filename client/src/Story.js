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
          A comfortable but simple and old looking couch is underneath you, and stone walls surround you in a small room.
          Two large oak doors are opposite to you. Sunlight streams through a small open window, and small birds can be heard
          chirping away. You glimpse the tops of trees outside, too. Brimming with curiosity, you wander over to the doors
          and crack each one open a little. It looks as if one leads into the castle, while the other leads outside to the forest.
          You can either stay in the castle to explore or you may leave and wander through the forest. There could be
          clues in the castle or the forest to help you figure out who you are and where you came from. You might even find some
          pets to pet? Incredible! Choose a path. Are you up for some adventure?
          </p>
        </div>
        <div className='instructions-story'>
         <h2> Instructions </h2>
         <p> The rules are simple: there are none. You will be playing a link style game, which means you will
         go from scene to scene by clicking on one of the options. Some will lead you to success,
         while others may lead you to failure... maybe even death! So, choose wisely and dont forget to log in before
         you start your game. Good luck, pet some pets, and have fun! Click on the link below to start!</p>
        </div>
        <Link to='/worlds'>Start Your Adventure</Link>
      </div>
    );
  }
}

export default Story;
