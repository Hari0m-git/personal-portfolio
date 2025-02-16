import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  Box,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Person,
  School,
  Work,
  Code,
  Assignment,
  Description,
} from '@mui/icons-material';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'About', path: '/', icon: <Person /> },
    { label: 'Education', path: '/education', icon: <School /> },
    { label: 'Skills', path: '/skills', icon: <Code /> },
    { label: 'Experience', path: '/experience', icon: <Work /> },
    { label: 'Projects', path: '/projects', icon: <Assignment /> },
    { label: 'Resume', path: '/resume', icon: <Description /> },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 2 }}>
          Harisankar K
        </Typography>

        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ mr: 1 }}
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  selected={location.pathname === item.path}
                >
                  <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </Box>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mx: 1,
                    borderBottom: location.pathname === item.path ? '2px solid' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </Box>
                  {item.label}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
