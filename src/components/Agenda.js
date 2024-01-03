import { Box, Divider, Link, Stack, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMaps from './GoogleMaps';

function Agenda() {
    const { t } = useTranslation();

    return (
        <Box id="agenda" minWidth={{ md: '80%' }} flex>
            <Stack direction={{ sm: 'column', md: 'row' }} flex justifyContent='space-around' paddingBottom={4}>
                <Box width={{ md: 200 }}>
                    <Box display='flex' height={140} >
                        <Box margin='auto' component='img' maxWidth={70} src='/static/calendar.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.weddingDay')}</Typography>
                    <Typography textAlign='center' >{t('agenda.weddingDate')}</Typography>
                </Box>
                <Box width={{ md: 200 }} >
                    <Box display='flex' height={140} >
                        <Box margin='auto' component='img' maxWidth={85} src='/static/cerimony.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.cerimony')}</Typography>
                    <Typography textAlign='center' >{t('agenda.cerimonyDescription')}</Typography>
                </Box>
                <Box width={{ md: 200 }} >
                    <Box display='flex' height={140} >
                        <Box margin='auto' component='img' maxWidth={60} src='/static/fireworks.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.reception')}</Typography>
                    <Typography textAlign='center' >{t('agenda.receptionDescription')}</Typography>
                </Box>
            </Stack>
            <Divider sx={{ bgcolor: "primary.main", maxWidth: 600, margin: 'auto' }} />
            <Box width={{ xs: '80vw', md: '100%' }} >
                <Stack display='flex' paddingTop={4} paddingBottom={4}>
                    <Box margin='auto' component='img' paddingBottom={2} maxWidth={70} src='/static/location.png' />
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}><Link href="https://www.villaquintili.com/">{t('agenda.direction1')}</Link></Typography>
                    <Typography textAlign='center'>{t('agenda.direction2')}</Typography>
                    <Typography textAlign='center'>{t('agenda.direction3')}</Typography>
                </Stack>
                <GoogleMaps />
            </Box>
        </Box>
    );
}

export default Agenda;