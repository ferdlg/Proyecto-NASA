import React, { useState } from 'react';
import './App.css';
import StarField from './components/StarrySpace/StarrySpace';
// import CustomModal from './components/modal/CustomModal';
// import CardData from './components/CardData/CardData';
// import { Button } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StarField />
      
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Abrir Modal
      </Button>
      <CustomModal open={open} handleClose={handleClose} />
      <h1 style={{zIndex: 1000, position: 'relative'}}></h1>
      <CardData style={{zIndex: 1000, position: 'relative'}}></CardData> */}
    </>
  );
}

export default App;
