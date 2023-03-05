import { Box, Stack, Typography } from '@mui/material';

import React from 'react';

function Agenda() {

    return (
        <Box id="agenda" minWidth={{ md: '80vw' }} flex>
            <Stack direction={{ sm: 'column', md: 'row' }} paddingTop={2} flex justifyContent='space-between'>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }}>
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={70} src='/static/calendar.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>Il giorno del matrimonio</Typography>
                    <Typography textAlign='center' paddingBottom={2}>9 settembre 2023</Typography>
                    <Typography textAlign='center'>Segnati la data.</Typography>
                    <Typography textAlign='center'>È un sabato!</Typography>
                </Box>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }}>
                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={80} src='/static/church.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>Cerimonia</Typography>
                    <Typography textAlign='center' paddingBottom={2}>h 15:30</Typography>
                    <Typography textAlign='center'>Abbazia di San Donato</Typography>
                    <Typography textAlign='center'>Via S. Donato, 6</Typography>
                    <Typography textAlign='center'>Sesto Calende (VA)</Typography>
                </Box>
                <Box margin='auto' height={{ md: 400 }} width={{ md: 200 }} >

                    <Box display='flex' height={140} padding={2}>
                        <Box margin='auto' component='img' maxWidth={60} src='/static/fireworks.png' />
                    </Box>
                    <Typography textAlign='center' fontWeight='bold' paddingBottom={2}>Ricevimento</Typography>
                    <Typography textAlign='center' paddingBottom={2}>h 17:00</Typography>
                    <Typography textAlign='center'>Tenuta Aquasole</Typography>
                    <Typography textAlign='center'>Via Fornace, 498/1</Typography>
                    <Typography textAlign='center'>Mercallo (VA)</Typography>
                </Box>
            </Stack>
        </Box>
    );

}
export default Agenda;