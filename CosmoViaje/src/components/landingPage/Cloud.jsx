import React from 'react'
import '../../assets/styles/components/landingPage/core/_cloud.css'

const Cloud = () => {
  return (
    <div className="img-animations">
      {
        Array.from({ length:5 }).map((_, index) => (
          <img key={index} src="../../assets/Images/pages/landing/cloud.svg" alt="nube flotante" />
        ))
      }
    </div>
  );
};

export default Cloud;
