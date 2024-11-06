import '../../assets/styles/pages/_landingPage.css'
import ButtonNasa from '../../components/landingPage/ButtonNasa';
import Cloud from '../../components/landingPage/Cloud';
import HeaderNasa from '../../components/landingPage/HeaderNasa';
import RocketNasa from '../../components/landingPage/RocketNasa';
import '../../assets/styles/pages/_landingPage.css';

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

            </div>
        </div>
    );
};
export default Landing;