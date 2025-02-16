import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Foetal Head Segmentation in Ultrasound scans using CNNs',
      description: [
        'Coordinated a 4-member team to achieve foetal head segmentation from ultrasound scans using CNN models in PyTorch.',
        'Implemented and optimized encoder-decoder algorithms based on SegNet models to enhance GPU efficiency.',
        'Created a UNet model with 512 channels, improving the Dice Score from 0.71 to 0.90 for improving segmentation accuracy.',
      ],
      image: '/projects/fetal-head.jpg',
      technologies: ['PyTorch', 'CNN', 'UNet', 'Image Segmentation', 'Deep Learning'],
      projectId: 'ID 5030 Project',
      github: 'https://github.com/Hari0m-git/Foetalheadsegmentation',
    },
    {
      title: 'Sports Celebrity Image Classification',
      description: [
        'Designed end-to-end image classification system with OpenCV and Haar Cascade for image processing and face detection.',
        'Trained models (SVM, Logistic Regression, Random Forest), achieving 91% accuracy and F1 score - 0.88 for optimized SVM.',
        'Created an interactive UI with HTML, CSS, and JavaScript, integrated with a Flask server to deploy the classification model.',
      ],
      image: '/projects/sports-classification.png',
      technologies: ['OpenCV', 'Machine Learning', 'Flask', 'HTML/CSS/JS', 'SVM'],
      github: 'https://github.com/Hari0m-git/image_class',
    },
    {
      title: 'Deep Learning-Based Stock Price Forecasting',
      description: [
        'Built stock forecasting system by preprocessing financial data from Yahoo Finance API and normalizing it for accuracy.',
        'Created a sequential Deep learning model in Tensorflow with unidirectional LSTM layers (50 units) for stock prices.',
        'Restructured the model using the Adam optimizer, achieving a reduced RMSE loss of 235 on test data taken from the web.',
      ],
      image: '/projects/stock-forecast.jpg',
      technologies: ['TensorFlow', 'LSTM', 'Time Series', 'Deep Learning', 'Financial Data'],
      github: 'https://github.com/Hari0m-git/stock_analys',
    },
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    {project.projectId && (
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        {project.projectId}
                      </Typography>
                    )}
                    <Box sx={{ mt: 2 }}>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {project.description.map((item, i) => (
                          <li key={i}>
                            <Typography variant="body2" paragraph>
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  {project.github && (
                    <CardActions>
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                      >
                        View on GitHub
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
