import Gallery from "../../components/gallery/gallery";
import Title from "../../components/utils/title";
import rovertAlien from "../../assets/images/pages/mars/rovert-alien.svg";
import '../../assets/styles/pages/_galleryMars.css';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {getMarsRoverPhotos} from "../../redux/thunks/mars/marsThunk";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import DataCard from "../../components/CardData/dataCard";
import CustomModal from '../../components/modal/CustomModal';
import { Button } from '@mui/material';


const MarsGalley =()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPage] = useState(6);

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const photos = data.flatMap((array) => array.photos);

    const lastImage = currentPage * imagesPage;
    const firstImage = lastImage - imagesPage;
    const pagination = photos.slice(firstImage, lastImage);

    const handlePageChange =(event, value)=>{
        setCurrentPage(value);
    };

    const [openIndex, setOpenIndex] = useState(null);  
    const handleOpen = (index) => setOpenIndex(index);  
    const handleClose = () => setOpenIndex(null);  

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await dispatch(getMarsRoverPhotos());
            if (getMarsRoverPhotos.fulfilled.match(result)){
                setData(result.payload)
                console.log('Datos en el componente',result.payload);
            } else{
                console.error("Error al obtener los datos", result.error)
            }
        };
        fetchData();
    }, [dispatch])
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
                    <Gallery>
                        {pagination.map((photo, index) => (
                            <DataCard key={photo.id}>
                                <img src={photo.img_src} alt={`photo ${photo.id}`} className="cardData__img" />
                                <Button variant="outlined" onClick={() => handleOpen(index)}>Ver más</Button>
                                <CustomModal open={openIndex === index} handleClose={handleClose}>
                                        <div style={{justifyContent :'center'}}>
                                            
                                            <img src={photo.img_src} alt={`photo ${photo.id}`} style={{ width: '360px', borderRadius: '8px' }} />
    
                                        </div>
                                </CustomModal>
                            </DataCard>
                        ))}
                    </Gallery>
                    <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 4 }}>
                        <Pagination 
                            count={Math.ceil(photos.length / imagesPage)} 
                            color="primary" 
                            page={currentPage} 
                            onChange={handlePageChange} 
                        />
                    </Stack>
                </div>
            </div>
        </div>
        </>
    )
};

export default MarsGalley;