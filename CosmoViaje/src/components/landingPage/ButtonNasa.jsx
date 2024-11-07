import React from 'react';
import Button from '@mui/material/Button';


const ButtonNasa = () => {
  return (
    <Button variant="contained" onClick={() => {document.getElementById('landing__sections').scrollIntoView({ behavior: 'smooth' });}}>
      Despegar
    </Button>
)
};

export default ButtonNasa;