import CodeIcon from '@mui/icons-material/Code';
import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {

    return (
        <Box component='footer' id="footer" padding={5} justifyContent="center" display="flex">
            <CodeIcon fontSize='small' sx={{ marginRight: 1 }} />
            <Typography id="placeholder" variant='caption'>Developed by us.</Typography>
        </Box>
    );

}
export default Footer;