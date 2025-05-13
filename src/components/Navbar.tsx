// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <AppBar 
    position="sticky" 
    sx={{ 
      '& a': { color: 'inherit', textDecoration: 'none' },
      mb: 2 // Add some margin below the navbar
    }}
  >
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <RouterLink to="/">Brian McVeigh</RouterLink>
      </Typography>
      <Box>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/resume">
          Resume
        </Button>
        <Button color="inherit" component={RouterLink} to="/links">
          Links
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
