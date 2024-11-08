import ButtonMars from "../../components/utils/button"
import Subtitle from "../../components/utils/subtitle"
import Title from "../../components/utils/title"
import "../../assets/styles/pages/_mars.css"


const MarsPage = ()=>{
    return(
        <div className="page__mars">
            <div className="page__mars-background">
                <img src="../../assets/Images/pages/mars/fondo-paisaje-marte.png" alt="fondo-paisaje-marte" className="page__mars-background-img" />
            </div>
            <div className="page__mars-title">
                <Title text={'BIENVENIDX AL UNIVERSO DE MARTE'}></Title>
            </div>
            <div className="page__mars-subtitle">
                <Subtitle text={'Aqui encontraras una increible variedad de imagenes tomadas por el rover Curiosity de la NASA en su expedicion a Marte, Diviertete!'}></Subtitle>
            </div>
            <div className="page__mars-btn">
                <ButtonMars></ButtonMars>
            </div>
            <div className="page_mars-images">
                <img src="../../assets/Images/pages/mars/alien-peace.png" alt="alien-peace" className="page_mars-images-peace" />
                <img src="../../assets/Images/pages/mars/alien-astronaut.png" alt="alien-astronaut" className="page_mars-images-atronaut"/>
            </div>
        </div>
    )
}
export default MarsPage;