import '../../assets/styles/components/mars/_title.css';

const Subtitle = ({text})=>{
    return(
        <div className="container__subtitle">
            <h3 className="container__subtitle-text">{text}</h3>
        </div>
    )
};

export default Subtitle;