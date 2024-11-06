import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';



const ModalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1a1a',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.8)',
  width: '90%',
  maxWidth: '1000px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    maxWidth: '95%',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#d9d9d9',
  borderRadius: '8px',
  padding: '20px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '15px',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flexBasis: '50%',
  marginRight: '20px',
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
    marginRight: '0',
    marginBottom: '15px',
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px 20px',
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
    padding: '10px 0',
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  alignSelf: 'center',
  backgroundColor: '#ff5a5a',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ff2e2e',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '8px 16px',
  },
}));

const CustomModal = ({ open, handleClose, planetaId }) => {
  const [imagenUrl, setImagenUrl] = useState('');

 

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        <ContentBox>
          <ImageContainer>
            <img
              src="https://kids.jotdown.es/wp-content/uploads/2020/03/planetas.jpeg" 
              alt="Imagen del planeta"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </ImageContainer>
          <TextContainer>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Imagen del título 
            </Typography>
            <Typography variant="body1" gutterBottom>
              Descripción de la imagen en nuestra plataforma educativa, donde la ciencia espacial cobra vida.
              Aquí podrás descubrir la majestuosidad del cosmos, aprender sobre los planetas, estrellas y galaxias, ¡todo de una forma fácil y divertida!
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fotógrafo o herramienta de fotografía
            </Typography>
            <CloseButton onClick={handleClose}>
              VOLVER A LA GALERÍA
            </CloseButton>
          </TextContainer>
        </ContentBox>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;


