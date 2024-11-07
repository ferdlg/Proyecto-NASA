import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

