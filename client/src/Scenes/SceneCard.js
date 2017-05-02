import React from 'react';

const SceneCard = (props) =>
  <div>
    <img className="scene-image" src="http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg"></img>
    <h4> {props.scene.description} </h4>
  </div>

export default SceneCard;
