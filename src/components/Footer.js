import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

function Footer() {

    return (
        <Box component='footer' id="footer" padding={2}>
            <Grid container justifyContent="center" >
                <Grid item >
                    <Typography fontFamily='Roboto' padding={1} variant='caption' display="flex" >
                        <CodeIcon fontSize='small' sx={{ marginRight: 1 }} />Developed by us.
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography fontFamily='Roboto' padding={1} variant='caption' display="flex">
                        <Link href="https://github.com/saraestefano/saraestefano.github.io" color="inherit" underline="hover" display="flex" >
                            <GitHubIcon fontSize='small' sx={{ marginRight: 1 }} />
                            Code on GitHub.
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    );

}
export default Footer;