import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

import { useState } from 'react';

const Gallery = ({ children }) => {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {children.map((child, index) => (
                <ImageListItem key={index}>
                    {child}
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default Gallery;