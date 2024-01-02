import { Box } from '@mui/material';
import React from 'react';

function Rsvp() {

    return (
        <Box display="flex" flexGrow={1} id="rsvp" component="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSeZcxeFmyqm3PH13P65A8Umpc6Sw5QIdFhL2Ttc4zXv1mSoJg/viewform?embedded=true" width="100%" border={0} />
    );

}

export default Rsvp;