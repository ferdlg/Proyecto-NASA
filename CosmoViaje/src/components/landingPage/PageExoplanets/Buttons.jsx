import React from 'react'
import { Link } from 'react-router-dom';

function Buttons({ path2}) {
    return (
        <div className="button-group">
            <button className="btn gallery"> <Link to={path2} className='btn-link'> GALERIA</Link> </button>
        </div>
    );
}

export default Buttons;