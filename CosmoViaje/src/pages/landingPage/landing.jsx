import '../../assets/styles/pages/_landingPage.css'
import ButtonNasa from '../../components/landingPage/ButtonNasa';
import Cloud from '../../components/landingPage/Cloud';
import HeaderNasa from '../../components/landingPage/HeaderNasa';
import RocketNasa from '../../components/landingPage/RocketNasa';
import '../../assets/styles/pages/_landingPage.css';
import BasicCard from '../../components/landingPage/card';

const Landing =()=>{
    return(
        <div className='landing'>
            <div className='landing__header'>
                <HeaderNasa></HeaderNasa>
                <ButtonNasa></ButtonNasa>
            </div>
            <div className='landing__rocket'>
                <RocketNasa></RocketNasa>
            </div>
            <div className='landing__cloud'>
                <Cloud></Cloud>
            </div>
            <div className='landing__sections'>
                <BasicCard name={'Exoplanetas'} description={'el viaje por los planetas extra solares comienza aqui.'} path={'/Mars'}></BasicCard>
                <BasicCard name={'Marte'} description={'hecha un viztazo a las imagenes tomadas en Marte.'} path={'/Mars'}></BasicCard>
            </div>
        </div>
    );
};
export default Landing;