import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';



const ModalContainer = styled(Box)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1a1a',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.8)',
  width: '90%',
  maxWidth: '1000px',
  zIndex:4,
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    maxWidth: '95%',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flexDirection: 'row',
  justifyItems: 'center',
  backgroundColor: '#d9d9d9',
  borderRadius: '8px',
  padding: '20px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '15px',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  flexBasis: '50%',
  marginRight: '20px',
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
    marginRight: '0',
    marginBottom: '15px',
  },
}));

export const TextContainer = styled(Box)(({ theme }) => ({
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

const CustomModal = ({ open, handleClose , children}) => {

  return (
    <div>
    <Modal open={open} onClose={handleClose} >
    <ModalContainer>
        <ContentBox>
          {children}
            <CloseButton onClick={handleClose}>
              VOLVER A LA GALERÍA
            </CloseButton>
        </ContentBox>
      </ModalContainer>
    </Modal>
    </div>
  );
};

export default CustomModal;

