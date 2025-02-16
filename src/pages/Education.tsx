import React from 'react';
import {
  Container,
  Typography,
  Paper,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { School } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: 'Indian Institute of Technology, Madras',
      degree: 'B.Tech in Metallurgical Engineering',
      year: '2020 - 2024',
      description: 'CPI: 8.27/10',
    },
    {
      institution: 'Placid Vidya Vihar Senior Secondary School',
      degree: 'Senior Secondary (XII)',
      year: '2018 - 2020',
      description: 'Percentage: 94.8%'
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
            Education
          </Typography>
          
          <Timeline position="alternate">
            {educationData.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <School />
                  </TimelineDot>
                  {index < educationData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h6" component="h1">
                      {edu.institution}
                    </Typography>
                    <Typography color="textSecondary">{edu.year}</Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {edu.degree}
                    </Typography>
                    {Array.isArray(edu.description) ? (
                      <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                        {edu.description.map((item, i) => (
                          <li key={i}>
                            <Typography variant="body2">{item}</Typography>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {edu.description}
                      </Typography>
                    )}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Education;
