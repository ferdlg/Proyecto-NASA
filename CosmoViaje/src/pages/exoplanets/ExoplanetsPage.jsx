import React from 'react';
import Description from '../../components/landingPage/PageExoplanets/Description';
import Buttons from '../../components/landingPage/PageExoplanets/Buttons';
import ButtonBack from '../../components/ButtonBack/button';
import '../../assets/styles/pages/_Exoplanets.css'

function ExoplanetPage() {
    return (
        <div className="exoplanetPage">
            <img src='../../assets/Images/planeta.svg' alt="Planeta" className='planet-image' />
            <img src='../../assets/Images/planeta.svg' alt="Planeta" className='planet-image-right' />
            <img src='../../assets/Images/planeta.svg' alt="Planeta" className='planet-image-right2' />

            <div className='exoplanetPage__description'>
                <Description />
            </div>

            <div className='exoplanetPage__buttons'>
                <Buttons path1={'/Exoplanets-data'} path2={'/Exoplanets-gallery'}/>
                <ButtonBack></ButtonBack>       
            </div>

            <div className="astronaut-group">
                <img src='../../assets/Images/Astronauta.svg' alt="Astronauta" className="astronaut" />
                <img src='../../assets/Images/Astronauta.svg' alt="Astronauta" className="astronaut flipped" />
                <img src='../../assets/Images/Astronauta.svg' alt="Astronauta" className="astronaut" />
            </div>
        </div>
    );
}

export default ExoplanetPage;
