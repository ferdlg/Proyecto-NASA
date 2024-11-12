import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import '../../assets/styles/components/_modal.css'


const CustomModal = ({ open, handleClose, children }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal__container">
          <div className="modal__content-box">
            {children}
            <Button onClick={handleClose} className="modal__close-button" color="error" variant="contained">
              VOLVER A LA GALERÍA
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
