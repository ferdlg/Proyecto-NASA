import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

import { useState } from 'react';

const Gallery = ({ children }) => {
    return (
        <ImageList  sx={{ width: '100%', height: 'auto' }}
        cols={{ xs: 1, sm: 2, md: 3 }}
        gap={8}
        rowHeight="auto">
            {children.map((child, index) => (
                <ImageListItem key={index}>
                    {child}
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default Gallery;