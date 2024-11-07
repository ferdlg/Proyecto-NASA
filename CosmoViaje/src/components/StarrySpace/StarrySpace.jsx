import React, { useEffect, useRef } from 'react';
import '../../assets/styles/base/_index.css';
import '../../assets/styles/components/_space.css';
import { generateSpaceLayer } from '../../utils/StarrySpace'; 
// import logo from "../../assets/Images/Logo.svg";

const StarField = ({children}) => {
    const space1Ref = useRef(null);
    const space2Ref = useRef(null);
    const space3Ref = useRef(null);

    useEffect(() => {
        if (space1Ref.current && space2Ref.current && space3Ref.current) {
            generateSpaceLayer("1px", space1Ref.current, 400, "20s");
            generateSpaceLayer("2px", space2Ref.current, 200, "15s");
            generateSpaceLayer("4px", space3Ref.current, 50, "10s");
        } else {
            console.error("Una o mÃ¡s referencias de contenedor no encontradas.");
        }
    }, []);

    return (
        <div className="container">
            {/* <img src={logo}style={{width:'100px', zIndex:'-2', position:'absolute', margin:'0'}} /> */}
            <div className="space space-1" ref={space1Ref}></div>
            <div className="space space-2" ref={space2Ref}></div>
            <div className="space space-3" ref={space3Ref}></div>
            <div class="main-content">
                {children}
            </div>
        </div>
    );
};

export default StarField;