// External imports
import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          color: 'darkred',
          backgroundColor: 'grey',
          '& h1': {
            color: 'black',
          },
        },
      },
    },
  },
});

// Local imports
import MenuAppBar from '../components/menu/MenuAppBar';

import HomePage from '../pages/Home';
import VotingsPage from '../pages/Votings';
import VoteTopicPage from '../pages/Voting';

// Component definition
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuAppBar />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="votings" element={<VotingsPage />} />
            <Route path="voting" element={<VoteTopicPage />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// Default export
export default App;
