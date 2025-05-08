// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Website
      </Typography>
      <Box>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/resume">
          Resume
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;