import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function GiftRegistry() {
    const { t } = useTranslation();

    return (
        <Container id="gift-registry">
            <Box margin='auto' maxWidth={600}>
                <Box padding={3} display='flex' flexDirection='column'>
                    <Box display='flex' justifyContent='center' marginBottom={4}>
                        <Box component='img' src='static/gift_registry.png' maxWidth={200} />
                    </Box>
                    <Typography textAlign='center'>{t('gift.saintAugustine1')}</Typography>
                    <Typography textAlign='center'>{t('gift.saintAugustine2')}</Typography>
                </Box>
                <Divider sx={{ bgcolor: "primary.main", maxWidth: 200, margin: 'auto' }} />
                <Box justifyContent='center'>
                    <Box margin={4}>
                        <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>{t('gift.content1')}</Typography>
                        <Typography textAlign='center'>{t('gift.content2')}</Typography>
                    </Box>
                    <Box border={1} borderColor='primary.main' maxWidth={300} margin='auto' padding={0.5} display='flex' flexDirection='column'>
                        <Typography textAlign='left' fontFamily='Roboto' variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.accountHolder')}:</Box> STEFANO BIELLI</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.iban')}:</Box> ES34 0081 0167 4500 0184 7687</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.swift')}:</Box> BSAB ESBB</Typography>
                        <Typography textAlign='left' fontFamily='Roboto' variant='caption'><Box display='inline' fontWeight='bold'>{t('gift.description')}:</Box>  Viaggio di nozze</Typography>
                    </Box>
                    <Typography textAlign='center' marginTop={2}>{t('gift.thanks')}</Typography>
                </Box>
                <Box>
                    <Box display='flex' justifyContent='center'>
                        <Box component='img' src='static/journey_together.png' sx={{ maxWidth: { xs: 300, md: 400 } }} />
                    </Box>
                </Box>
            </Box>
        </Container>
    );

}
export default GiftRegistry;