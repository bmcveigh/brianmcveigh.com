import React from "react";
import { Box, Button, Chip, Divider, Grid, Link, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import PageTemplate from "../components/PageTemplate";
import LinksTable from "../components/LinksTable";
import GoogleIcon from '@mui/icons-material/Google';

const data = {
  name: 'Brian McVeigh',
  googleDocsUrl: 'https://docs.google.com/document/d/1dAVmRQVhuSWccIN80f_OKxFgDRkcNXCP/edit',
  heading: <LinksTable renderAs="inline" />,
  education: [
    {
      universityName: 'George Mason University',
      degree: 'B.S. Information Technology',
      graduationYear: '2013',
    },
    {
      universityName: 'Northern Virginia Community College',
      degree: 'A.S. Business Administration',
      graduationYear: '2010',
    },
  ],
  cetifications: [
    { name: 'Acquia Certified Back End Specialist – Drupal 8', awarded: '2019' },
    { name: 'Acquia Certified Developer – Drupal 8', awarded: '2018' },
    { name: 'Certified Scrum Master – Scrum Institute', awarded: '2015' },
  ],
  experience: [
    {
      position: 'Software Engineering Associate Manager / Team Lead',
      company: 'Accenture Federal Services',
      location: 'Washington, DC',
      startDate: 'June 2023',
      endDate: 'Present',
      responsibilities: [
        'Lead a development team supporting a large-scale federal Drupal platform.',
        'Architect and build decoupled applications using React and Node.js.',
        'Mentor developers, conduct code reviews, and manage technical interviews.',
        'Maintain AWS infrastructure and contribute to DevOps automation.',
      ],
    },
    {
      position: 'Software Engineering Specialist / Team Lead',
      company: 'Accenture Federal Services',
      location: 'Washington, DC',
      startDate: 'Oct 2019',
      endDate: 'June 2023',
      responsibilities: [
        'Led Drupal 7-to-8 migration with custom module development and React integrations.',
        'Designed and maintained CI/CD pipelines in Jenkins; managed Dockerized services.',
        'Mentor developers, conduct code reviews, and manage technical interviews.',
        'Oversaw AWS infrastructure and served as Information Security Lead, addressing vulnerabilities.',
      ],
    },
    {
      position: 'Senior Developer',
      company: 'Forum One',
      location: 'Alexandria, VA',
      startDate: 'Aug 2018',
      endDate: 'Oct 2019',
      responsibilities: [
        'Built interactive data models using React/Redux and Node.js.',
        'Delivered full-stack solutions using Drupal, WordPress, PHP, and JavaScript.',
        'Implemented DevOps workflows with Docker, Jenkins, and AWS.',
      ],
    },
    {
      position: 'Full Stack Software Engineer (Open Source)',
      company: 'MetroStar Systems',
      location: 'Reston, VA',
      startDate: 'Apr 2017',
      endDate: 'July 2018',
      responsibilities: [
        'Developed custom Drupal modules and themes; supported Angular frontend features.',
        'Managed AWS and Acquia-hosted environments; authored RESTful APIs.',
        'Contributed to local dev environments using Docker, Docksal, and Git.',
      ],
    },
    {
      position: 'Development Consultant',
      company: 'CGI Federal',
      location: 'Washington, DC',
      startDate: 'Aug 2015',
      endDate: 'Apr 2017',
      responsibilities: [
        'Led custom Drupal 7 development for federal environments (DEV/TEST/PROD).',
        'Used Selenium and Drupal testing modules to ensure robust application delivery.',
        'Contributed to Java-based tools using Spring, Hibernate, and Knockout.js.',
      ],
    },
    {
      position: 'PHP/Drupal Developer',
      company: 'ADG Tech Consulting, LLC',
      location: 'Centreville, VA',
      startDate: 'Nov 2014',
      endDate: 'July 2015',
      responsibilities: [
        'Built custom Drupal 7 features using Form API, Views, and contributed modules.',
        'Developed dynamic MySQL queries using Drupal\'s abstraction layer and PDO.',
        'Supported Agile team development and conducted technical interviews.',
      ],
    },
    {
      position: 'Software Developer',
      company: 'Syncadd Systems, Inc.',
      location: 'Arlington, VA',
      startDate: 'Feb 2014',
      endDate: 'Nov 2014',
      responsibilities: [
        'Delivered data visualization tools using PHP, MySQL, and Microsoft Access.',
        'Automated reporting through SQL and VBA macros.',
      ],
    },
    {
      position: 'Software Developer',
      company: 'Rose Li and Associates, Inc.',
      location: 'Rockville, MD',
      startDate: 'June 2013',
      endDate: 'Nov 2013',
      responsibilities: [
        'Developed a Mac OS X app in Objective-C for acronym extraction and export.',
        'Built Java apps for medical research visualization and maintained company site content.',
      ],
    },
    {
      position: 'Software Developer',
      company: 'Nysmith School',
      location: 'Herndon, VA',
      startDate: 'May 2013',
      endDate: 'June 2013',
      responsibilities: [
        'Created a Joomla-based internal social platform using MySQL and Linux.',
      ],
    },
  ],
  skills: [
    // Languages & Programming
    { name: 'JavaScript', years: 10 },
    { name: 'PHP', years: 9 },
    { name: 'Java', years: 3 },
    { name: 'SQL', years: 10 },
    { name: 'Objective-C', years: 1 },
    { name: 'VBA', years: 2 },
    { name: 'HTML', years: 10 },
    { name: 'CSS', years: 10 },

    // Front-end Frameworks & Libraries
    { name: 'React', years: 5 },
    { name: 'Redux', years: 4 },
    { name: 'Angular', years: 2 },
    { name: 'Knockout.js', years: 1 },
    { name: 'Joomla', years: 1 },
    { name: 'Drupal 6-10', years: 11 },
    { name: 'WordPress', years: 3 },

    // Back-end & Full-stack
    { name: 'Node.js', years: 5 },
    { name: 'Spring', years: 2 },
    { name: 'Hibernate', years: 2 },

    // DevOps & CI/CD
    { name: 'Docker', years: 4 },
    { name: 'Jenkins', years: 4 },
    { name: 'AWS', years: 8 },
    { name: 'Acquia', years: 4 },
    { name: 'CI/CD Pipelines', years: 4 },
    { name: 'DevOps Automation', years: 4 },

    // Testing
    { name: 'Selenium', years: 2 },
    { name: 'Unit Testing', years: 5 },
    { name: 'Drupal Testing Modules', years: 3 },

    // Databases
    { name: 'MySQL', years: 8 },
    { name: 'Microsoft Access', years: 1 },
    { name: 'Drupal Database Abstraction Layer', years: 8 },
    { name: 'PDO', years: 8 },

    // Tools & Methodologies
    { name: 'Git', years: 9 },
    { name: 'Docksal', years: 3 },
    { name: 'Agile Development', years: 8 },
    { name: 'Mentoring & Technical Leadership', years: 4 },
    { name: 'Code Reviews', years: 6 },
    { name: 'Technical Interviews', years: 4 },
    { name: 'Information Security', years: 4 },
    { name: 'RESTful APIs', years: 6 },
    { name: 'Infrastructure Management', years: 4 },
    { name: 'Data Visualization', years: 5 },
  ],
};

const Resume = () => (
  <PageTemplate title="Resume">
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Link href={data.googleDocsUrl} target="_blank">
          <Button variant="contained">
            <Box component="span">View in Google Docs </Box> <GoogleIcon fontSize="small" sx={{ marginLeft: 1 }} />
          </Button>
        </Link>
      </Box>

      {/* Header */}
      <Typography variant="h4" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {data.heading}
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Certifications */}
      <Typography variant="h6" gutterBottom>
        Certifications
      </Typography>
      <Box component="ul">
        {data.cetifications.map(item => <Box key={item.name} component="li">{item.name} ({item.awarded})</Box>)}
      </Box>

      {/* Experience */}
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <List>
        {data.experience.map(item => (
          <ListItem key={item.position + item.company} alignItems="flex-start">
            <ListItemText
              primary={`${item.position} | ${item.company}`}
              secondary={
                <>
                  {item.startDate} – {item.endDate}
                  <br />
                  {item.responsibilities.map(responsibility => (
                    <React.Fragment key={responsibility}>
                      &nbsp;&nbsp;- {responsibility}<br />
                    </React.Fragment>
                  ))}
                </>
              }
              sx={{ fontSize: 14 }}
            />
          </ListItem>
        ))}
      </List>

      {/* Education */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <List>
        {data.education.map(item => (
          <ListItem key={item.degree}>
            <ListItemText
              primary={`${item.degree} - ${item.universityName}`}
              secondary={item.graduationYear}
            />
          </ListItem>
        ))}
      </List>

      {/* Skills */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 1,
          '& .MuiGrid-item': {
            padding: 1,
            display: 'flex',
            alignItems: 'center',
          }
        }}
      >
        {[...data.skills]
          .sort((a, b) => b.years - a.years)
          .map((skill) => (
          <Grid key={skill.name}>
            <Chip
              label={`${skill.name} (${skill.years}y)`}
              variant="outlined"
              sx={{
                // transform: `scale(${1 + skill.years * 0.05})`,
                bgcolor: 'primary.main',
                color: 'common.black',
                fontSize: 10 + skill.years,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  </PageTemplate>
);

export default Resume;
