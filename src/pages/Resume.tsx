import React from "react";

import { Chip, Divider, Grid, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";

import PageTemplate from "../components/PageTemplate";
import LinksTable from "../components/LinksTable";

const data = {
  name: 'Brian McVeigh',
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
    'JavaScript',
    'PHP',
    'Java',
    'SQL',
    'Objective-C',
    'VBA',
    'HTML',
    'CSS',

    // Front-end Frameworks & Libraries
    'React',
    'Redux',
    'Angular',
    'Knockout.js',
    'Joomla',
    'Drupal 7/8',
    'WordPress',

    // Back-end & Full-stack
    'Node.js',
    'Spring',
    'Hibernate',

    // DevOps & CI/CD
    'Docker',
    'Jenkins',
    'AWS',
    'Acquia',
    'CI/CD Pipelines',
    'DevOps Automation',

    // Testing
    'Selenium',
    'Unit Testing',
    'Drupal Testing Modules',

    // Databases
    'MySQL',
    'Microsoft Access',
    'Drupal Database Abstraction Layer',
    'PDO',

    // Tools & Methodologies
    'Git',
    'Docksal',
    'Agile Development',
    'Mentoring & Technical Leadership',
    'Code Reviews',
    'Technical Interviews',
    'Information Security',
    'RESTful APIs',
    'Infrastructure Management',
    'Data Visualization',
  ],
};

const Resume = () => (
  <PageTemplate title="Resume">
    <Paper elevation={3} sx={{ p: 4 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {data.heading}
      </Typography>

      <Divider sx={{ my: 3 }} />

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
                    {item.responsibilities.map(responsibility => <React.Fragment key={responsibility}>{responsibility}<br /></React.Fragment>)}
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
              key={item.degree}
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
      <Grid container spacing={1}>
        {data.skills.map((skill) => (
          <Grid key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
    </Paper>
  </PageTemplate>
);
export default Resume;
