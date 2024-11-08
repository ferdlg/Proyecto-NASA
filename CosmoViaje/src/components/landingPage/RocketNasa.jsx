import React from 'react';
import rocketImage from '../../assets/Images/pages/landing/cohete.svg'; 
import '../../assets/styles/components/landingPage/core/_rocket.css'

const RocketNasa = () => {
  return (
    <div className="rocket-container">
      <img className='rocket' src={rocketImage} alt="Cohete"/>
    </div>
  );
};

export default RocketNasa;