import Button from '@mui/material/Button';
import '../../assets/styles/components/mars/_title.css';
import { Link } from 'react-router-dom';

const ButtonMars =()=>{
    return(
        <div className='container__button'>    
        <Button variant="contained" color="success" className='container__button-btn'>
            <Link to="/Mars-gallery" className='container__button-link'>Explorar</Link>
        </Button>
        </div>
    )
} 
export default ButtonMars;