import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Home({ onRsvpClick }) {
    const { t } = useTranslation();

    return (
        <Box id="home">
            <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item>
                    <Box sx={{ objectFit: 'contain', maxWidth: { xs: 450, sm: 550 } }} component="img" src="/static/love.png" />
                </Grid>
                <Grid item>
                    <Typography textAlign='center' color='primary' variant='h6'>{t('home.weddingDirection')}</Typography>
                </Grid>
                <Grid item>
                    <Button onClick={onRsvpClick} variant="contained" disableElevation>
                        <Typography>
                            RSVP
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;