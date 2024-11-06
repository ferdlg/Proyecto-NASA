import Gallery from "../../components/gallery/gallery"
import Title from "../../components/utils/title";
import rovertAlien from "../../assets/images/pages/mars/rovert-alien.svg";

import '../../assets/styles/pages/_galleryMars.css';
const MarsGalley =()=>{
    return(
        <>
        <div className="gallery__mars">
            <div className="gallery__mars-title">
                <Title text={'BIENVENIDX A LA GALERIA DE MARTE'}></Title>
            </div>
            <div className="gallery__mars__section-gallery">
                <div className="gallery__mars-img">
                    <img src={rovertAlien} alt="rovert-alien-svg" className="gallery__mars-img-alien" />
                </div>
                <div className="gallery__mars-gallery">
                    <Gallery></Gallery>
                </div>
            </div>
        </div>
        </>
    )
};

export default MarsGalley;