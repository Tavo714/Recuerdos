import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Recuerdos
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Pedidos</Button>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
