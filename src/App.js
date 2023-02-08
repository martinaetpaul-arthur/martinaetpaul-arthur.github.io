import { Box, Container, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { Agenda, Contribute, Footer, Header, Home, Rsvp } from './components';
import { Locale } from './components/Locale';

const theme = createTheme(
  {
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
  }
);

function App() {

  const [page, setPage] = React.useState('Home');
  const [locale, setLocale] = React.useState('it')

  return (
    <ThemeProvider theme={theme}>
      <Locale.Provider value={{ locale, setLocale }}>
        <CssBaseline />
        <Container>
          <Stack minHeight="100vh" justifyContent="space-between" alignItems="stretch" >
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
        </Container>
      </Locale.Provider>
    </ThemeProvider>
  );
}

export default App;
