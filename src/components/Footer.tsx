import React from 'react';
import { Box, Container, Typography, IconButton, useTheme, Tooltip } from '@mui/material';
import {
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  School,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();

  const contacts = [
    {
      icon: <Email />,
      label: 'Email',
      href: 'mailto:harisankarkaramchand@gmail.com',
      text: 'harisankarkaramchand@gmail.com'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harisankar-k-90a400233',
      text: 'LinkedIn Profile'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      href: 'tel:+918138950040',
      text: '+91 8138950040'
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      text: 'India'
    },
    {
      icon: <School />,
      label: 'Education',
      text: 'IIT Madras'
    }
  ];

  const renderIconButton = (contact: {
    icon: React.ReactElement;
    label: string;
    href?: string;
    text: string;
  }) => {
    if (contact.href) {
      return (
        <IconButton
          color="inherit"
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.icon}
        </IconButton>
      );
    }
    return (
      <IconButton
        color="inherit"
      >
        {contact.icon}
      </IconButton>
    );
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'light' 
          ? theme.palette.grey[200] 
          : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          mb: 2
        }}>
          {contacts.map((contact, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: { xs: 1, sm: 0 },
                color: 'text.secondary'
              }}
            >
              <Tooltip title={contact.label}>
                {renderIconButton(contact)}
              </Tooltip>
              <Typography variant="body2" sx={{ ml: 1 }}>
                {contact.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ mt: 2 }}
        >
          {new Date().getFullYear()} Harisankar K. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
