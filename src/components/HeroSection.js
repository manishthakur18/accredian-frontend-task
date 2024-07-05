// HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ReferNowButton from './ReferNowButton';

const HeroSection = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor:'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        p: 2
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Invite your friends and earn rewards.
      </Typography>
      <ReferNowButton />
    </Box>
  );
}

export default HeroSection;
