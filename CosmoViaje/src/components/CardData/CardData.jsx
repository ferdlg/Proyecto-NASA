import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'; 
import '../../assets/styles/base/_cardData.css';


const PlanetCard = ({ name, letter, hostName, discoveryYear, method }) => (
  <Card className="styled-card">
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1">Planet letter: {letter}</Typography>
      <Typography variant="body1">Host Name: {hostName}</Typography>
      <Typography variant="body1">Discovery Year: {discoveryYear}</Typography>
      <Typography variant="body1">Discovery Method: {method}</Typography>
    </CardContent>
  </Card>
);


const CardData = () => {
  
  const planetData = [
    { name: "Planet Name", letter: "A", hostName: "Host Star", discoveryYear: "2024", method: "Radial Velocity" },
    { name: "Planet Name", letter: "B", hostName: "Host Star", discoveryYear: "2023", method: "Transit" },
    { name: "Planet Name", letter: "C", hostName: "Host Star", discoveryYear: "2025", method: "Imaging" },
  ];

  return (
    <Box className="space-container">
      <Grid container spacing={3} justifyContent="center">
        {planetData.map((planet, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <PlanetCard
              name={planet.name}
              letter={planet.letter}
              hostName={planet.hostName}
              discoveryYear={planet.discoveryYear}
              method={planet.method}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardData;
