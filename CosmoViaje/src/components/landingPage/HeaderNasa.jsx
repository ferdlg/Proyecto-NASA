import React from 'react';
import LogoCosmo from '../../assets/images/pages/landing/LogoCosmo.svg';
import '../../assets/styles/components/landingPage/core/_header.css';

const HeaderNasa = () => {
  return (
    <div className='Header'>
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

