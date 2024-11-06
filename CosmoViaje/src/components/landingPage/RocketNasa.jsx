import React from 'react';
import rocketImage from './../../assets/styles/components/landingPage/core/cohete .svg'; // Asegúrate de que esta ruta sea correcta

const RocketNasa = () => {
  return (
    <div className="rocket-container">
      <img className='rocket' src={rocketImage} alt="Cohete"/>
    </div>
  );
};

export default RocketNasa;