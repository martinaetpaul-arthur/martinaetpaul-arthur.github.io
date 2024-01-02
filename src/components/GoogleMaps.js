import { Box } from '@mui/material';
import React from 'react';


function GoogleMaps() {

    return (
        <Box display="flex" flexGrow={1} id="rsvp" component="iframe" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_tRrwaiiNgqEfEicRCfT4XrhpoPFEj4U&q=place_id:ChIJ1-ZV4VGJJRMRi5NYCLy0gp8&zoom=15" width="100%" height={{xs: 300, md: 350}} border={0} />
    );
    
}

export default GoogleMaps; 