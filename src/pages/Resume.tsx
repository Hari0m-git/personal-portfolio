import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
} from '@mui/material';
import { Download, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1ekS074uOPx5yJ37e-vQ2L45MdPzHiHpm/view?usp=drive_link";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1ekS074uOPx5yJ37e-vQ2L45MdPzHiHpm";

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Resume
          </Typography>
          
          <Typography variant="body1" paragraph>
            View or download my resume to learn more about my qualifications, experience in AI/ML, 
            and achievements in technology and business strategy.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Launch />}
              href={resumeUrl}
              target="_blank"
            >
              View Resume
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Download />}
              href={downloadUrl}
            >
              Download Resume
            </Button>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Resume Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Senior Manager, Strategy and Innovation (AI/ML) at ICICI Lombard<br />
              • B.Tech in Metallurgical Engineering from IIT Madras<br />
              • Experience in machine learning, deep learning, and business strategy<br />
              • Strong background in Python, AI/ML technologies, and business analysis<br />
              • Multiple successful projects in computer vision and deep learning
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Resume;
