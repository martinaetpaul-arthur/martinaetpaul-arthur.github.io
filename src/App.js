import { Box, Container, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
        '"Josefin Slab", serif',
        'Roboto',
      ].join(','),
    },
  }
);


function App({page}) {

  const navigate = useNavigate();
  const [locale, setLocale] = React.useState('it')

  return (
    <ThemeProvider theme={theme}>
      <Locale.Provider value={{ locale, setLocale }}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Stack minHeight="100vh" justifyContent="space-between" alignItems="stretch" >
            <Header
              pages={['home', 'agenda', 'contribute', 'rsvp']}
              home='home'
            />
            <Box display="flex" flexGrow={1} justifyContent="center">
              {
                page === 'home' &&
                <Home onRsvpClick={() => navigate('/rsvp')} />
              }

              {
                page === 'agenda' &&
                <Agenda />
              }

              {
                page === 'contribute' &&
                <Contribute />
              }

              {
                page === 'rsvp' &&
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
