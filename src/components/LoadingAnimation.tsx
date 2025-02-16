import React from 'react';
import { Box, CircularProgress, useTheme } from '@mui/material';

const LoadingAnimation: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '200px',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: theme.palette.primary.main,
        }}
      />
    </Box>
  );
};

export default LoadingAnimation;
