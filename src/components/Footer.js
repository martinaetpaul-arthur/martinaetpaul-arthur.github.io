import CodeIcon from '@mui/icons-material/Code';
import { Box, Typography } from '@mui/material';
import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <Box id="footer" padding={5} justifyContent="center" display="flex">
            <CodeIcon fontSize='small' sx={{ marginRight: 1 }} />
            <Typography id="placeholder" variant='caption'>Developed by us.</Typography>
        </Box>
    );

}
export default Footer;