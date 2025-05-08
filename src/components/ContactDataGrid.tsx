import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Link,
  Box,
  Paper,
  SvgIcon,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// GitHub SVG path wrapped as MUI SvgIcon
const GitHubIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.09-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.08.75.8 1.2 1.83 1.2 3.09 0 4.43-2.71 5.4-5.29 5.68.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27 0.5 12 0.5z" />
  </SvgIcon>
);

const ContactLinksTable = () => {
  return (
    <Box component={Paper} sx={{ maxWidth: 500, p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Contact Links
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <GitHubIcon color="action" />
            </TableCell>
            <TableCell>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener">
                github.com/yourusername
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <LinkedInIcon color="primary" />
            </TableCell>
            <TableCell>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
                linkedin.com/in/yourusername
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default ContactLinksTable;
