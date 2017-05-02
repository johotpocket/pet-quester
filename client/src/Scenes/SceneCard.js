import React from 'react';
import { Link } from 'react-router';

const SceneCard = (props) => {
  return(
    <div>
      <div>
      <img className="scene-image" src={props.scene.image}/>
      </div>
      <h4> {props.scene.description} </h4>
      {
        props.scene.choices.map((choice) => {
          console.log(choice)
          return(
          <div>
            <Link to={'/scenes/' + choice.nextScene} > {choice.text} </Link>
          </div>
          )
      })
    }
    </div>
  )
}


export default SceneCard;
