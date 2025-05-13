import { CssBaseline, Container, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GitHubRibbon from './components/GitHubRibbon';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Links from './pages/Links';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <GitHubRibbon username="bmcveigh" repository="brianmcveigh.com" />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
