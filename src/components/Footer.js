import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';


function Footer() {

    return (
        <Box component='footer' id="footer" padding={2} paddingTop={{ xs: 4, sm: 2 }}>
            <Grid container justifyContent="center" >
                <Grid item >
                    <Typography padding={1} variant='caption' display="flex" >
                        <CodeIcon fontSize='small' sx={{ marginRight: 1 }} />Developed with love.
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography padding={1} variant='caption' display="flex">
                        <Link href="https://github.com/martinaetpaul-arthur/martinaetpaul-arthur.github.io" color="inherit" underline="hover" display="flex" >
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