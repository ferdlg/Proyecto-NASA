
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

import { useState } from 'react';

const Gallery = ({ children }) => {
    return (
        <ImageList  >
            {children.map((child, index) => (
                <ImageListItem key={index}>
                    {child}
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default Gallery;