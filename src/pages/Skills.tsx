import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Programming and Visualization Tools',
      skills: [
        { name: 'Python', logo: '/logos/python.png' },
        { name: 'Excel', logo: '/logos/excel.png' },
        { name: 'MATLAB', logo: '/logos/matlab.png' },
        { name: 'Chroma DB', logo: '/logos/chroma.png' },
        { name: 'Git', logo: '/logos/git.png' },
        { name: 'HTML', logo: 'logos/html.png' },
        { name: 'CSS', logo: '/logos/css.png' },
        { name: 'Azure Cloud', logo: '/logos/azure.png' },
      ],
    },
    {
      title: 'AI/ML Skills',
      skills: [
        { name: 'PyTorch', logo: '/logos/pytorch.png' },
        { name: 'NLP', logo: '/logos/nlp.png' },
        { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
        { name: 'OpenCV', logo: '/logos/opencv.png' },
        { name: 'HuggingFace', logo: '/logos/huggingface.png' },
        { name: 'Langchain', logo: '/logos/langchain.png' },
      ],
    },
    {
      title: 'Business & Analysis Skills',
      skills: [
        { name: 'Business Analysis', logo: '/logos/business-analysis.png' },
        { name: 'Data Analysis', logo: '/logos/data-analysis.png' },
        { name: 'Leadership', logo: '/logos/leadership.png' },
        { name: 'Strategic Planning', logo: '/logos/strategy.png' },
        { name: 'Team Collaboration', logo: '/logos/collaboration.png' },
        { name: 'Communication', logo: '/logos/communication.png' },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Skills & Technologies
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                    {category.title}
                  </Typography>
                  <Grid container spacing={3}>
                    {category.skills.map((skill, skillIndex) => (
                      <Grid item xs={6} sm={3} md={2} key={skillIndex}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: theme.shadows[6],
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={skill.logo}
                            alt={skill.name}
                            sx={{
                              width: 48,
                              height: 48,
                              objectFit: 'contain',
                              mb: 1,
                            }}
                          />
                          <Typography variant="body2">{skill.name}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Skills;
