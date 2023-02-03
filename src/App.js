import * as React from 'react';
import { Box } from '@mui/material';
import './App.css';
import { Agenda, Contribute, Footer, Header, Home, Rsvp } from './components';


function App() {

  const [page, setPage] = React.useState('Home');

  return (
    <Box>
      <Header
        pages={['Home', 'Agenda', 'Contribute', 'Rsvp']}
        currentPage={page}
        setPage={setPage}
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
  );
}

export default App;
