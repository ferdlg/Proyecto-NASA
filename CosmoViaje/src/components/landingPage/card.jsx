import * as React from 'react';
import "../../assets/styles/components/_card.css";
import { Link } from 'react-router-dom';


export default function BasicCard({name, description, path}) {
  return (
    <div class="card">
        <div class="planet-icon">
            <div class="planet"></div>
            <div class="ring"></div>
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button class="explore-button"><Link to={path} className='explore-button-link'>Explorar</Link></button>
    </div>

  );
}

