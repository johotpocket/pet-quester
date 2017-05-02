import React from 'react';
import { Link } from 'react-router';

const SceneCard = (props) =>
  <div>
    <img className="scene-image" src="http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg"></img>
    <h4> {props.scene.description} </h4>
    {
      props.scene.choices.map((choice) =>
      (
        <div>
          <Link to={'/scenes/'} > {props.scene.choices.nextScene} </Link>
          <button type="button"> {choice.text} </button>
        </div>
        )
      )
    }
  </div>

export default SceneCard;
