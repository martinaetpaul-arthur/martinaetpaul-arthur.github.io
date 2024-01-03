import { Box, Button, Container, Divider, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from './Locale';

function Home({ onRsvpClick }) {
    const locale = React.useContext(Locale);
    const { t } = useTranslation();

    return (
        <Container id="home">
            <Box margin="auto" maxWidth={600}>
                <Grid container direction="column" justifyContent="space-between" alignItems="center" rowSpacing={2}>
                    <Grid item>
                        <Box hidden={locale === 'it'} sx={{ objectFit: 'contain', maxWidth: { xs: 300, sm: 550 } }} component="img" src="/static/love_fr.png" />
                        <Box hidden={locale !== 'it'} sx={{ objectFit: 'contain', maxWidth: { xs: 300, sm: 550 } }} component="img" src="/static/love_it.png" />
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