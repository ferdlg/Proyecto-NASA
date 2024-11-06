import React from 'react';
import Description from '../LandingPages/PageExoplanets/Description';
import Buttons from '../LandingPages/PageExoplanets/Buttons';
import logo from '../../assets/Images/Logo.svg';
import planet from '../../assets/Images/planeta.svg';
import planet2 from '../../assets/Images/planeta.svg';
import planet3 from '../../assets/Images/planeta.svg';
import astronaut from '../../assets/Images/Astronauta.svg';
import '../../assets/styles/components/Expoplanets/_Exoplanets.css'

function ExoplanetPage() {
    return (
        <div className="exoplanetPage">
            <img src={logo} alt="CosmoViaje" className="logo" />
            <img src={planet} alt="Planeta" className='planet-image' />
            <img src={planet2} alt="Planeta" className='planet-image-right' />
            <img src={planet3} alt="Planeta" className='planet-image-right2' />

            <div>
                <Description />
            </div>

            <div>
                <Buttons />
            </div>

            <div className="astronaut-group">
                <img src={astronaut} alt="Astronauta" className="astronaut" />
                <img src={astronaut} alt="Astronauta" className="astronaut flipped" />
                <img src={astronaut} alt="Astronauta" className="astronaut" />
            </div>
        </div>
    );
}

export default ExoplanetPage;
