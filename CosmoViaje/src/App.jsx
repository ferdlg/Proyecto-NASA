import React from 'react';
import HeaderNasa from './components/landingPage/HeaderNasa';
import './assets/styles/components/landingPage/core/_landingPage.css';
import RocketNasa from './components/landingPage/RocketNasa';
import Cloud from './components/landingPage/Cloud';
import ButtonNasa from './components/landingPage/ButtonNasa';

function App() {
  return (
    <>
      <div>
       <HeaderNasa/>
       <RocketNasa/>
       <Cloud/>
       <ButtonNasa/>
      </div>
      
    </>
  )
}

export default App
