import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Stack, Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

import { Locale } from './Locale.js';

function Header({ pages, onMenuClick, onHomeClick }) {

    const { setLocale } = React.useContext(Locale);

    const updateLocale = event => {
        if (event.target.checked) {
            setLocale('en')
        } else {
            setLocale('it')
        }
    }

    return (
        <Box id="header" component="header" >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton size="large" sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, height: 48, cursor: 'pointer' }} onClick={onHomeClick} component="img" src="/static/logo.png" />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems="center" display="flex">
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

                <Stack height="100%" direction="row" justifyItems="center" alignItems="center">
                    <Typography color="primary">IT</Typography>
                    <Switch onChange={updateLocale} size="small"></Switch>
                    <Typography color="primary">EN</Typography>
                </Stack>
            </Toolbar>
        </Box>
    );
}

export default Header;