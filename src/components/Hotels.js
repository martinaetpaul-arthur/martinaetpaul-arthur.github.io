import { Box, Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


function Hotels() {
    const { t } = useTranslation();

    return (
        <Box component='hotels' id="hotels" >
            <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2} paddingBottom={2}>
                <Grid item>
                    <Box sx={{ objectFit: 'contain', maxWidth: { xs: 200, sm: 350 } }} component="img" src="/static/hotels.png" />
                </Grid>
                <Grid item>
                    <Stack alignItems="center">
                        <Typography textAlign="center" marginBottom={2}>{t('hotels.description1')}</Typography>
                        <ButtonGroup orientation="vertical" aria-label="large button group" variant="outlined">
                            <Button href="https://www.booking.com/hotel/it/l-villetta-dei-sogni-nel-parco.et.html">La villetta dei sogni nel Parco</Button>
                            <Button href="https://www.booking.com/hotel/it/piccolo-borgo.fr.html">Hotel Piccolo Borgo</Button>
                            <Button href="https://www.booking.com/hotel/it/appiaparkhotelroma.fr.html">Appia Park Hotel</Button>
                        </ButtonGroup>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack alignItems="center">
                        <Typography textAlign="center" marginBottom={2}>{t('hotels.description2')}</Typography>
                        <ButtonGroup orientation="vertical" aria-label="large button group" variant="outlined">
                            <Button href="https://www.booking.com/hotel/it/san-giacomo-apartment-in-rome-near-the-center.fr.html">SAN GIACOMO ROOMS AND APARTMENT IN ROME</Button>
                        </ButtonGroup>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack alignItems="center">
                        <Typography textAlign="center" marginBottom={2}>{t('hotels.description3')}</Typography>
                        <ButtonGroup orientation="vertical" aria-label="large button group" variant="outlined">
                            <Button href="https://www.booking.com/hotel/it/b-amp-b-palazzo-lupardi.fr.html">Palazzo Lupardi Relais</Button>
                            <Button href="https://www.booking.com/hotel/it/hotelsantangeloroma.fr.html">Hotel Sant'Angelo</Button>
                        </ButtonGroup>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

    );
}

export default Hotels;