import { Box, Container, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
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
        main: '#cf9090'
      }
    },

    typography: {
      fontSize: 18,
      fontFamily:[
        "Pompiere",
      ].join(','),
    },
  }
);

const Pages = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const list = [t('pages.home'), t('pages.agenda'), t('pages.rsvp'), t('pages.giftRegistry')];

  return {
    list: list,
    home: list[0],
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
  const { i18n } = useTranslation();
  const [locale, setLocale] = React.useState(i18n.language);
  const pages = Pages();

  const changeLocale = (lang) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
  };

  return (

    <Locale.Provider value={locale}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Stack minHeight="100vh" justifyContent="space-between" alignItems="stretch" >
          <Header
            pages={pages.list}
            home={pages.home}
            navigate={pages.navigate}
            changeLocale={changeLocale}
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
