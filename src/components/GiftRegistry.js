import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function GiftRegistry() {
    const { t } = useTranslation();

    return (
        <Container id="gift-registry">
            <Box margin='auto' maxWidth={600}>
                <Box>
                    <Box display='flex' justifyContent='center'>
                        <Box component='img' src='static/journey_together.png' sx={{ maxWidth: { xs: 300, md: 400 } }} />
                    </Box>
                </Box>
                <Box justifyContent='center'>
                    <Box paddingBottom={4}>
                        <Typography textAlign={{ xs: 'justify', sm: 'center' }} fontWeight='bold' paddingBottom={2}>{t('gift.content1')}</Typography>
                        <Typography textAlign={{ xs: 'justify', sm: 'center' }}>{t('gift.content2')}</Typography>
                        <Typography textAlign={{ xs: 'justify', sm: 'center' }}>{t('gift.content3')}</Typography>
                    </Box>
                    <Box border={1} borderColor='primary.main' maxWidth={300} margin='auto' padding={0.5} display='flex' flexDirection='column'>
                        <Typography textAlign='left' fontFamily='Roboto' fontSize={14} variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.accountHolder')}:</Box> MARTINA BALDINI</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' fontSize={14} variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.iban')}:</Box> FR03 3000 2040 5900 0019 896 7C42</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' fontSize={14} variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.swift')}:</Box> CRLY FRPP</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' fontSize={14} variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.description')}:</Box>  Mariage Martina & Paul-Arthur</Typography>
                    </Box>

                    <Typography textAlign={{ xs: 'justify', sm: 'center' }} marginTop={4}>{t('gift.content4')}</Typography>
                    <Typography textAlign='center' marginTop={1} marginBottom={2}>{t('gift.thanks')}</Typography>
                </Box>

                {/* <Box paddingTop={3} paddingBottom={3} display='flex' flexDirection='column'>
                    <Typography textAlign={{ xs: 'justify', sm: 'center' }} fontWeight='bold' paddingBottom={2}>{t('gift.content1')}</Typography>
                    <Box display='flex' justifyContent='center' marginBottom={4}>
                        <Box component='img' src='static/gift_registry.png' maxWidth={200} />
                    </Box>
                </Box> */}
            </Box>
        </Container>
    );
}

export default GiftRegistry;