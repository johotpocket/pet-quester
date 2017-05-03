import React from 'react';
import { Link } from 'react-router';
import './scene.css'

const SceneCard = (props) => {
  return(
    <div className="container scene">
      <div>
      <img className="scene-image" src={props.scene.image}/>
      </div>
      <div className="jumbotron description">
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
    </div>
  )
}


export default SceneCard;
