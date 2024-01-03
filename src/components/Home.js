import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Home({ onRsvpClick }) {
    const { t } = useTranslation();

    return (
        <Container id="home">
            <Box margin="auto" maxWidth={600}>
                <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2}>
                    <Grid item>
                        <Stack alignItems='center' paddingTop={2}>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, objectFit: 'contain', maxWidth: 250 }} component="img" src="/static/logo.png" />
                            <Typography textAlign="center" color="primary" variant='h6'>{t('home.wedding')}</Typography>
                            <Typography textAlign="center" color="primary" variant='h6'>Martina & Paul-Arthur</Typography>
                            <Typography textAlign="center" color="primary" variant='h6'>06.09.2024</Typography>
                            <Box sx={{ objectFit: 'contain', maxWidth: { xs: 200, sm: 300 } }} component="img" src="/static/love.png" />
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography textAlign={{ xs: 'justify', sm: 'center' }} variant='h6' paddingBottom={3}>{t('home.description')}</Typography>
                        <Divider sx={{ bgcolor: "primary.main", maxWidth: 250, margin: 'auto' }} />
                    </Grid>
                    <Grid item>
                        <Typography textAlign='center' variant='h6' paddingTop={1}>{t('home.weddingDirection')}</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={onRsvpClick} variant="contained" disableElevation>
                            <Typography>
                                RSVP
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography textAlign='center' >{t('home.questions')}</Typography>
                        <Typography paddingBottom={1} textAlign='center' ><Link href='mailto:mariage.martina.pa@gmail.com'>mariage.martina.pa@gmail.com</Link></Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Home;