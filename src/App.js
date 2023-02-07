import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { Agenda, Contribute, Footer, Header, Home, Rsvp } from './components';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#b86570'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Dancing Script"',
    ].join(',')
  },
});

function App() {

  const [page, setPage] = React.useState('Home');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack minHeight="100vh" direction="column" justifyContent="space-between" alignItems="stretch" >
        <Header
          pages={['Home', 'Agenda', 'Contribute', 'Rsvp']}
          onHomeClick={() => setPage('Home')}
          onMenuClick={p => setPage(p)}
        />
        <Box display="flex" flexGrow={1} justifyContent="center">
          {
            page === 'Home' &&
            <Home onRsvpClick={() => setPage('Rsvp')} />
          }

          {
            page === 'Agenda' &&
            <Agenda />
          }

          {
            page === 'Contribute' &&
            <Contribute />
          }

          {
            page === 'Rsvp' &&
            <Rsvp />
          }
        </Box>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
