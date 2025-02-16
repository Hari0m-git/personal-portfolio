import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
  Link,
  Chip,
  useTheme,
} from '@mui/material';
import { Email, LinkedIn, Phone, MusicNote, DirectionsRun, Handshake } from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Strategy',
    'Innovation',
    'Business Analysis',
  ];

  const extracurriculars = [
    {
      title: 'Athletics',
      description: 'Participated in the Institute sports meet for athletics 100m race',
      icon: <DirectionsRun />,
    },
    {
      title: 'Music',
      description: 'Trained in Violin (Carnatic) & Keyboard (Western) for 5 years and performed in various live music events',
      icon: <MusicNote />,
    },
    {
      title: 'Social Work',
      description: 'Executed and led a 50-membered Bus Stand cleaning drive initiative in Kottayam during Republic Day 2019',
      icon: <Handshake />,
    },
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: '0 auto',
                  mb: 2,
                  border: `3px solid ${theme.palette.primary.main}`,
                }}
                alt="Harisankar K"
                src="/profile.png"
              />
              <Typography variant="h5" gutterBottom>
                Harisankar K
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Senior Manager, Strategy and Innovation (AI/ML)
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                ICICI Lombard, Mumbai
              </Typography>
              <Box sx={{ my: 2 }}>
                <Link
                  href="mailto:harisankarkaramchand@gmail.com"
                  sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                >
                  <Email sx={{ mr: 1 }} /> harisankarkaramchand@gmail.com
                </Link>
                <Link
                  href="https://www.linkedin.com/in/harisankar-k-90a400233"
                  target="_blank"
                  sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                >
                  <LinkedIn sx={{ mr: 1 }} /> LinkedIn Profile
                </Link>
                <Link
                  href="tel:+918138950040"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Phone sx={{ mr: 1 }} /> +91 8138950040
                </Link>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography paragraph>
                 I am <b>Harisankar K</b>, a passionate AI/ML strategist and innovator. 
                 With a background in Metallurgical Engineering from IIT Madras, I now lead AI-driven initiatives at ICICI Lombard while also contributing to research and hands-on projects. 
                 My work spans groundbreaking chatbot designs, customer segmentation models, and deep learning projects.
              </Typography>
              
              <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {interests.map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Extracurricular Activities
              </Typography>
              <Grid container spacing={2}>
                {extracurriculars.map((activity, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      {activity.icon}
                      <Box>
                        <Typography variant="subtitle1" gutterBottom>
                          {activity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {activity.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
