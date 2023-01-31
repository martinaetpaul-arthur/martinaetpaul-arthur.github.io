import * as React from 'react';

import { Box } from '@mui/material';
import './App.css';
import { Agenda, Contribute, Footer, Header, Home, Rsvp } from './components';

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Agenda />
      <Contribute />
      <Rsvp />
      <Footer />
    </Box>
  );
}

export default App;
