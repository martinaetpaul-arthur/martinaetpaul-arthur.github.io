import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function Home() {

    return (
        <Box id="home" margin={5}>
            <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item>
                    <Box sx={{ objectFit: 'contain', maxWidth: 300 }} component="img" src="/static/love.jpg" />
                </Grid>
                <Grid item>
                    <Typography variant="h5" >Sara & Stefano</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">9 settembre 2023</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">Sesto Calende, Varese, Italia</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" disableElevation>RSVP</Button>
                </Grid>
            </Grid>
        </Box>
    );

}
export default Home;