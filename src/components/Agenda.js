import { Box, Stack, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMaps from './GoogleMaps';

function Agenda() {
    const { t } = useTranslation();

    return (
        <Box id="agenda" minWidth={{ md: '80%' }} flex>
            <Stack direction={{ sm: 'column', md: 'row' }} flex justifyContent='center'>
                <Box height={{ md: 350 }} width={{ md: 200 }}>
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={70} src='/static/calendar.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.weddingDay')}</Typography>
                    <Typography textAlign='center' paddingBottom={2}>{t('agenda.weddingDate')}</Typography>
                </Box>
                <Box height={{ md: 350 }} width={{ md: 200 }} />
                <Box height={{ md: 350 }} width={{ md: 200 }} >
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={60} src='/static/fireworks.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.reception')}</Typography>
                    <Typography textAlign='center' paddingBottom={2}>{t('agenda.receptionTime')}</Typography>
                    <Typography textAlign='center'>{t('agenda.receptionDirection1')}</Typography>
                    <Typography textAlign='center'>{t('agenda.receptionDirection2')}</Typography>
                    <Typography textAlign='center'>{t('agenda.receptionDirection3')}</Typography>
                </Box>
            </Stack>
            <Box paddingTop={{ xs: 4, sm: 3 }} width={{ xs: '80vw', md: '100%' }}>
                <GoogleMaps />
            </Box>
        </Box>
    );
}

export default Agenda;