import { Box, Container, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
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

const Pages = (locale) => {
  const navigate = useNavigate();

  const pagesIt = ['home', 'programma', 'rsvp', 'lista nozze'];
  const pagesEn = ['home', 'agenda', 'rsvp', 'gift registry'];

  const assing = (locale) => {
    if (locale === 'it') {
      return pagesIt;
    } else {
      return pagesEn;

    }
  };

  const list = assing(locale);

  return {
    list: list,
    home: list[0],
    isHome: (page) => { return page === list[0] },
    isAgenda: (page) => { return page === list[1] },
    isGiftRegistry: (page) => { return page === list[2] },
    isRsvp: (page) => { return page === list[3] },
    navigate: (page) => {
      switch (page) {
        case list[0]:
          navigate('/')
          break;
        case list[1]:
          navigate('/agenda')
          break;
        case list[2]:
          navigate('/rsvp')
          break;
        case list[3]:
          navigate('/gift')
          break;
        default:
          navigate('/error')
      }
    },
    navigateRsvp: () => {
      navigate('/rsvp')
    }
  };
}

function Root() {
  const [locale, setLocale] = React.useState('it');
  const pages = Pages(locale);
  return (

    <Locale.Provider value={{ locale, setLocale }}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Stack minHeight="100vh" justifyContent="space-between" alignItems="stretch" >
          <Header
            pages={pages.list}
            home={pages.home}
            navigate={pages.navigate}
          />
          <Box display="flex" flexGrow={1} justifyContent="center">
            <Routes>
              <Route path='/' element={<Home onRsvpClick={() => pages.navigateRsvp()} />} />
              <Route path='/agenda' element={<Agenda />} />
              <Route path='/gift' element={<Contribute />} />
              <Route path='/rsvp' element={<Rsvp />} />
            </Routes>
          </Box>
          <Footer />
        </Stack>
      </Container>
    </Locale.Provider>);
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Root />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
