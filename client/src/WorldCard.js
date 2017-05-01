import React from 'react';
import { Link } from 'react-router';

const WorldCard = (props) =>
  <div className="world-card-border">
    <Link to={'/scenes/' + props.id} > {props.title}</Link>
  </div>

export default WorldCard;
