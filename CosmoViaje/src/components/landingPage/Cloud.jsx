import React from 'react'
import cloud from '../../assets/Images/pages/landing/cloud.svg';
import '../../assets/styles/components/landingPage/core/_cloud.css'

const Cloud = () => {
  return (
    <div className="img-animations">
      {
        Array.from({ length:5 }).map((_, index) => (
          <img key={index} src={cloud} alt="nube flotante" />
        ))
      }
    </div>
  );
};

export default Cloud;
