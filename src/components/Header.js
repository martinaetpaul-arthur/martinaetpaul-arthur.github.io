import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

import './Header.css';

function Header({ pages, currentPage, setPage }) {

    const getClassName = page => {
        if (currentPage === page)
            return 'focus';
        return 'unfocus';
    }

    return (
        <Box id="header">
            <Grid container justifyContent="space-evenly">
                <Grid item xs={1} justifyContent="center" display="flex">
                    <Box sx={{height:64, }} component="img" src="/static/logo.png" />
                </Grid>
                <Grid item xs={10}>
                    <Toolbar sx={{ justifyContent: "center" }} >
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
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    );
}

export default Header;