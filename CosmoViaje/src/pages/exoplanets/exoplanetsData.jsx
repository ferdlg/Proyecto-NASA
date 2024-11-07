import Description from "../../components/landingPage/PageExoplanets/Description"
import astronautRocket from "../../assets/images/pages/exoplanets/astronaut-rocket.svg"
import Gallery from "../../components/gallery/gallery"
const exoplanetsData= ()=>{
    return(
        <div className="exoplanetsData">
            <div className="exoplanetsData__description">
                <Description></Description>
            </div>
            <div className="exoplanetsData__img">
                <img src={astronautRocket} alt="astronaut-rocket" />
            </div>
            <div className="exoplanetsData__gallery">
                <Gallery>
                    
                </Gallery>
            </div>
        </div>
    )
}