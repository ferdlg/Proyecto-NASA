import React from 'react';
import LogoCosmo from './../../assets/styles/components/landingPage/core/LogoCosmo.svg';


const HeaderNasa = () => {
  return (
    <div className='Header'>
      <img src={LogoCosmo} alt='cosmo Viajes'></img>
      <div className='presentation'>
        <h1 className="text-cosmo">Cosmo Vajes</h1>
        <p className="text-welcome">
          Bienvenidos a nuestra plataforma educativa, donde la ciencia espacial cobra vida.
          Aquí podrás descubrir la majestuosidad del cosmos, aprender sobre los planetas,
          estrellas y galaxias, ¡todo de una forma fácil y divertida!
        </p>
        </div>
        
       
    
    </div>
  )
}

export default HeaderNasa;

