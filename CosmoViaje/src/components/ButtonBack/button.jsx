import Button from '@mui/material/Button';
import '../../assets/styles/components/mars/_title.css';
import { Link } from 'react-router-dom';
const ButtonBack = ()=>{
    return(
        <div>
            <Button variant="contained" className='container__button-back'>
                <Link to="/" className='container__button-link'>Volver</Link>
            </Button>
        </div>
    )
}
export default ButtonBack;