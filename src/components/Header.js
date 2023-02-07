import MenuIcon from '@mui/icons-material/Menu';
import { Grid, IconButton, Stack, Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

function Header({ pages, onMenuClick, onHomeClick }) {

    return (
        <Box id="header" component="header">
            <Grid container sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="space-between">
                <Grid item xs={1} justifyContent="center" display="flex">
                    <Box sx={{ height: 64, cursor: 'pointer' }} onClick={onHomeClick} component="img" src="/static/logo.png" />
                </Grid>
                <Grid item >
                    <Toolbar >
                        <Box>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => onMenuClick(page)}
                                >
                                    {page}
                                </Button>
                            )
                            )}
                        </Box>
                    </Toolbar>
                </Grid>
                <Grid item xs={1}>
                    <Stack height="100%" direction="row" justifyItems="center" alignItems="center">
                        <Typography color="primary">IT</Typography>
                        <Switch size="small"></Switch>
                        <Typography color="primary">EN</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;