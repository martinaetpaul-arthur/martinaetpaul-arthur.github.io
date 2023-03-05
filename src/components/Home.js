import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function Home({ onRsvpClick }) {

    return (
        <Box id="home">
            <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item>
                    <Box sx={{ objectFit: 'contain', maxWidth: { xs: 300, sm: 350 } }} component="img" src="/static/love.png" />
                </Grid>
                <Grid item>
                    <Typography padding={1} textAlign='center' variant='h4' fontWeight='Bold' >Sara - Stefano</Typography>
                    <Typography textAlign='center' variant='h6'>9 settembre 2023</Typography>
                    <Typography textAlign='center' variant='h6'>Sesto Calende, Varese, Italia</Typography>
                </Grid>
                <Grid item>
                    <Button onClick={onRsvpClick} variant="contained" disableElevation>
                        <Typography fontFamily='Roboto'>
                            RSVP
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );

}
export default Home;