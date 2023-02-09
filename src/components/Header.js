import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Grid, IconButton, Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

import { Locale } from './Locale.js';

function Header({ pages, onMenuClick, onHomeClick }) {

    const { setLocale } = React.useContext(Locale);
    const [open, setOpen] = React.useState(false);

    const updateLocale = (event) => {
        event.target.checked ? setLocale('en') : setLocale('it');
    }

    return (
        <Box id="header" component="header" >
            <Grid container height={64} columns={{ xs: 4, md: 12 }} justifyContent="space-between">
                <Grid item xs={1} sx={{ display: { xs: 'flex', md: 'none' } }} >
                    <IconButton size="large" onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                </Grid>

                <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent="center" >
                    <Box sx={{ height: 64, cursor: 'pointer' }} onClick={onHomeClick} component="img" src="/static/logo.png" />
                </Grid>

                <Grid item md={1} sx={{ display: { xs: 'none', md: 'flex ' } }} justifyContent="left" >
                    <Box sx={{ height: 64, cursor: 'pointer' }} onClick={onHomeClick} component="img" src="/static/logo.png" />
                </Grid>
                <Grid item md={10} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>

                    <Box alignItems="center" display="flex">
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => onMenuClick(page)}
                                size="large"
                            >
                                {page}
                            </Button>
                        )
                        )}
                    </Box>
                </Grid>

                <Grid item xs={1} alignItems="center" justifyContent="right" display="flex">
                    <Typography color="primary">IT</Typography>
                    <Switch onChange={updateLocale} size="small" />
                    <Typography color="primary">EN</Typography>
                </Grid>
            </Grid>
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => onMenuClick(page)}
                    >
                        {page}
                    </Button>
                )
                )}
            </Drawer>
        </Box>
    );
}

export default Header;