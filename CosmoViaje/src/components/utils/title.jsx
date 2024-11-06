import '../../assets/styles/components/mars/_title.css';

const Title = ({text})=>{
    return(
        <div className="container__title">
            <h1 className="container__title-text">{text}</h1>
        </div>
    )
};

export default Title;