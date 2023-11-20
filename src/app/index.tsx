// External imports
import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Local imports
import MenuAppBar from 'components/menu/MenuAppBar';

import HomePage from 'pages/Home';
import VotingsPage from 'pages/Votings';
import VotingPage from 'pages/Voting';
import VoteTopicPage from 'pages/VotingTopic';
import ArticlePage from 'pages/Article';
import ScrollToTop from 'helpers/ScrollToTop';
import FAQ from 'pages/FAQ';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides:
      {
        root: {

        },
        body: {
          ...darkScrollbar(),
          // color: 'darkred',
          backgroundColor: '#f0fbff',
          '& h1': {
            color: 'black',
          },
        },
      },
    },
  },
});

// Component definition
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuAppBar />
      <Container maxWidth="lg" id="app-main">
        <Box sx={{ bgcolor: '#e6f1f9', minHeight: '100vh', height: 'auto', paddingBottom: '2%',marginBottom: '30px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="votings" element={<VotingsPage />} />
            <Route path="voting" element={<VotingPage />} />
            <Route path="voting-topic" element={<VoteTopicPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="faq" element={<FAQ />} />
          </Routes>
        </Box>
      </Container>
      <ScrollToTop />
    </ThemeProvider>
  );
}

// Default export
export default App;
