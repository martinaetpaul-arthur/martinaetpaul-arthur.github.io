import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import './Header.css'

function Header({ pages, currentPage, setPage }) {

    const getClassName = page => {
        if (currentPage === page)
            return 'focus';
        return 'unfocus';
    }

    return (
        <Box id="header">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            {pages.map((page) => (
                                <Button
                                    className={getClassName(page)}
                                    key={page}
                                    onClick={() => setPage(page)}
                                >
                                    {page}
                                </Button>
                            )
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;