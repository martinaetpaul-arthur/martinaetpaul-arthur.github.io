import { Box, Stack, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';

function Agenda() {
  const { t } = useTranslation();

    return (
        <Box id="agenda" minWidth={{ md: '80vw' }} flex>
            <Stack direction={{ sm: 'column', md: 'row' }} paddingTop={2} flex justifyContent='space-between'>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }}>
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={70} src='/static/calendar.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.weddingDay')}</Typography>
                    <Typography textAlign='center' paddingBottom={2}>{t('agenda.weddingDate')}</Typography>
                    <Typography textAlign='center'>{t('agenda.saveTheDate1')}</Typography>
                    <Typography textAlign='center'>{t('agenda.saveTheDate2')}</Typography>
                </Box>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }}>
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={80} src='/static/church.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('agenda.ceremony')}</Typography>
                    <Typography textAlign='center' paddingBottom={2}>{t('agenda.ceremonyTime')}</Typography>
                    <Typography textAlign='center'>{t('agenda.ceremonyDirection1')}</Typography>
                    <Typography textAlign='center'>{t('agenda.ceremonyDirection2')}</Typography>
                    <Typography textAlign='center'>{t('agenda.ceremonyDirection3')}</Typography>
                </Box>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }} >

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
        </Box>
    );

}
export default Agenda;