import * as React from 'react';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
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
    ].join(','),
    h5: {
      fontFamily: ['"Dancing Script"']
    }
  },
});

function App() {

  const [page, setPage] = React.useState('Home');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header
          pages={['Home', 'Agenda', 'Contribute', 'Rsvp']}
          onHomeClick={() => setPage('Home')}
          onMenuClick={p => setPage(p)}
        />

        {
          page === 'Home' &&
          <Home />
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

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
