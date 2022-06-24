import React from 'react';
import Box from '@mui/material/Box';

class ImageComponent extends React.Component {
    render() {
        const path = `/assets/${this.props.src}`
        console.log(__dirname)
        return (
            <Box component="span" sx={{ p: 2, width: '25%', height: '25%' }}>
                <img src={path} alt={this.props.alt} style={{ width: '100%', height: '100%' }} />
            </Box>
        );
    }
}

export default ImageComponent;