import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Chip,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Work } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Manager, Strategy and Innovation (AI/ML)',
      company: 'ICICI Lombard',
      duration: 'Jul 2024 - Present',
      description: [
        'Designed an open source chatbot, leveraging RAG and fine-tuning to handle local languages on 20+ IRDAI guidelines.',
        'Integrated into the Azure cloud platform, impacting 400+ underwriters and CSMs for policy and premium related queries',
        'Designed an NPS classification system, on 10,000+ customer feedback, identifying 3 cohorts for customer dissatisfaction.',
        'Developed XGBoost-based customer segmentation model (F1 score - 0.74) to predict likelihood of complaints in FY 24-25.',
        'Devised Fuzzy matching to map names across 3000+ garages, improving operational efficiency across 2 states',
      ],
      technologies: ['Python', 'Azure Cloud', 'NLP', 'XGBoost', 'RAG'],
    },
    {
      title: 'Research Assistant',
      company: 'Materials informatics lab, IIT Madras',
      duration: 'Jul 2023 - May 2024',
      description: [
        'Conducted research on optimal compositions for shape memory alloys in aerospace, medical, and automotive sectors',
        'Developed GPR model to predict martensitic transition temperature in SMAs, achieving R² score of 0.88 through optimization.',
        'Applied Recursive Feature Elimination (RFE) and Linear Regression, boosting the model for R² scores of 0.92 and 0.56.',
      ],
      technologies: ['Machine Learning', 'GPR', 'RFE', 'Linear Regression', 'Materials Science'],
    },
    {
      title: 'Strategy Officer',
      company: 'Ozibook Tech Solutions',
      duration: 'Dec 2022 - Feb 2023',
      description: [
        'Conducted in depth profit and cost analysis, delivering financial insights through communication across 12 departments.',
        'Leveraged financial data to streamline budgeting-processes using linear algebra, improving overall operational efficiency.',
        'Created a 5-year profit projection model, outlining key milestones for achieving break-even point, and earned an LOR.',
      ],
      technologies: ['Financial Analysis', 'Linear Algebra', 'Business Strategy', 'Data Analysis'],
    },
    {
      title: 'Public Relations and Outreach Manager',
      company: 'Enactus IIT Madras',
      duration: 'Aug 2022 - Jan 2023',
      description: [
        'Spearheaded a 5-membered team contributing to the socio-economic upliftment of local artisans in Chennai',
        'Orchestrated a successful pottery painting competition, amplifying the social impact and student involvement',
      ],
      technologies: ['Team Leadership', 'Event Management', 'Social Impact'],
    },
    {
      title: 'Captain',
      company: 'NSO Fitness Team, IIT Madras',
      duration: 'Dec 2022 - May 2023',
      description: [
        'Led the institute NSO Fitness team of 35 members showcasing exceptional leadership and team-building skills',
      ],
      technologies: ['Team Leadership', 'Fitness Training', 'Team Management'],
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
            Professional Experience & Leadership
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                      <Typography variant="h6">
                        {exp.title}
                      </Typography>
                      <Typography color="primary" variant="subtitle1">
                        {exp.company}
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle2">
                        {exp.duration}
                      </Typography>
                      
                      <Box sx={{ mt: 2 }}>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {exp.description.map((item, i) => (
                            <li key={i}>
                              <Typography variant="body2" paragraph>
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>

                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Experience;
