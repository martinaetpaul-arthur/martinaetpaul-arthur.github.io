import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link, Typography } from '@mui/material';
import React from 'react';

function Footer() {
    
    return (
        <Box component='footer' id="footer" padding={5} justifyContent="center" display="flex">
            <Typography id="placeholder" variant='caption' display="flex">
                <CodeIcon fontSize='small' sx={{ marginRight: 1 }} />Developed by us.
            </Typography>
            <Typography id="placeholder" variant='caption' display="flex">
                <Link href="https://github.com/stebielli/wedding" color="inherit" underline="hover" display="flex" >
                    <GitHubIcon fontSize='small' sx={{ marginLeft: 1, marginRight: 1 }} />
                    Code on GitHub.
                </Link>
            </Typography>
        </Box>

    );

}
export default Footer;