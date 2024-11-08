import astronautRocket from "../../assets/Images/pages/exoplanets/astronaut-rocket.svg"
import Gallery from "../../components/gallery/gallery"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getExoplanets } from "../../redux/thunks/exoplanets/exoPlanetsThunk";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Title from "../../components/utils/title";
import Subtitle from "../../components/utils/subtitle";

const ExoplanetsData= ()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPage] = useState(6);

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const lastImage = currentPage * imagesPage;
    const firstImage = lastImage - imagesPage;
    const pagination = data.slice(firstImage, lastImage);

    const handlePageChange =(event, value)=>{
        setCurrentPage(value);
    };

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await dispatch(getExoplanets());
            console.log('result', result)
            if (getExoplanets.fulfilled.match(result)){
                setData(result)
                console.log('Datos en el componente',result);
            }else{
                console.error("Error al obtener los datos", result.error)
            }
        };
        fetchData();
    }, [dispatch])


    return(
        <div className="exoplanetsData">
            <div className="exoplanetsData__description">
                <Title text={ 'DATOS CIENTIFICOS'}></Title>
                <Subtitle text={'Para los curiosos!'}></Subtitle>
            </div>
            <div className="exoplanetsData__img">
                <img src={astronautRocket} alt="astronaut-rocket" />
            </div>
            <div className="exoplanetsData__gallery">
                <Gallery>
                {pagination.map((planet) => (
                            <DataCard key={planet.objectid}>
                                <h2>{planet.pl_name}</h2>
                                <p>{planet.hostid}</p>
                                <p>{planet.hostname}</p>
                                <p>{planet.disc_year}</p>
                                <p>{planet.discoverymethod}</p>
                            </DataCard>
                        ))}
                </Gallery>
                <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 4 }}>
                        <Pagination 
                            count={Math.ceil(data.length / imagesPage)} 
                            color="primary" 
                            page={currentPage} 
                            onChange={handlePageChange} 
                        />
                </Stack>
            </div>
        </div>
    )
};

export default ExoplanetsData;