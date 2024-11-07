import Gallery from "../../components/gallery/gallery";
import Grid from '@mui/material/Grid2';
import Title from "../../components/utils/title";
import astronautArt from "../../assets/images/pages/exoplanets/astronautaArt.svg";
import '../../assets/styles/pages/_galleryexoplanets.css';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getExoplanetsMultimedia } from "../../redux/thunks/exoplanets/exoPlanetsThunk";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import DataCard from "../../components/cardData/dataCard";
import Subtitle from "../../components/utils/subtitle";
import { Typography, Button } from '@mui/material';
import CustomModal from '../../components/modal/CustomModal';

const ExoplanetsGallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPage] = useState(6);

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const lastImage = currentPage * imagesPage;
    const firstImage = lastImage - imagesPage;
    const pagination = data.slice(firstImage, lastImage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const [openIndex, setOpenIndex] = useState(null);  
    const handleOpen = (index) => setOpenIndex(index);  
    const handleClose = () => setOpenIndex(null);  

    useEffect(() => {
        const fetchData = async () => {
            const result = await dispatch(getExoplanetsMultimedia());
            if (getExoplanetsMultimedia.fulfilled.match(result)) {
                const dataExp = result.payload.data.collection.items.map(item => {
                    const dataFields = item.data.map(dataItem => ({
                        id: dataItem.nasa_id,
                        title: dataItem.title,
                        description: dataItem.description,
                        creator: dataItem.secondary_creator
                    }))
                    const imageLink = item.links.map(link => link.href);
                    return { dataFields, imageLink };
                });
                setData(dataExp)
                console.log('Datos en el componente', dataExp);
            } else {
                console.error("Error al obtener los datos", result.error)
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <div className="gallery__exoplanets">
                <div className="gallery__exoplanets-title">
                    <Title text={'BIENVENIDX A LA GALERIA DE EXOPLANETAS'}></Title>
                    <Subtitle text={'Disfruta las obras de arte del espacio!'}></Subtitle>
                    <div className="gallery__exoplanets-img">
                        <img src={astronautArt} alt="rovert-alien-svg" className="gallery__exoplanets-img-alien" />
                    </div>
                </div>
                <div className="gallery__exoplanets__section-gallery">
                    <div className="gallery__exoplanets-gallery">
                        <Gallery>
                            {pagination.map((item, index) => (
                                item.dataFields.map((dataItem) => (
                                    <DataCard key={dataItem.id}>
                                        <img src={item.imageLink[0]} alt={dataItem.title} className="cardData__img" />
                                        <Button variant="outlined" onClick={() => handleOpen(index)}>Ver más</Button>

                                        <CustomModal open={openIndex === index} handleClose={handleClose}>
                                        <div style={{justifyItems :'center'}}>
                                            <div style={{justifyItems :'center'}}>
                                                <Typography variant="h5" fontWeight="bold" gutterBottom color="black">{dataItem.title}</Typography>
                                                <img src={item.imageLink[0]} alt={dataItem.title} style={{ width: '360px', borderRadius: '8px' }} />
                                            </div>
                                            <div style={{justifyItems :'center', textAlign:'center'}}>
                                                <Typography variant="body1" gutterBottom color="black">{dataItem.description}</Typography>
                                                <Typography variant="body2" color="text.primary">Creador: {dataItem.creator}</Typography>
                                            </div>
                                        </div>
                                        </CustomModal>
                                    </DataCard>
                                ))
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
            </div>
        </>
    )
};

export default ExoplanetsGallery;
