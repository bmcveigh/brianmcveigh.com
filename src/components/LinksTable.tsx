import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Box,
  Paper,
  SvgIcon,
  Grid,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// GitHub SVG path wrapped as MUI SvgIcon.
const GitHubIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.09-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.08.75.8 1.2 1.83 1.2 3.09 0 4.43-2.71 5.4-5.29 5.68.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27 0.5 12 0.5z" />
  </SvgIcon>
);

const data = {
  links: [
    { href: 'https://github.com/bmcveigh', icon: <GitHubIcon color="action" /> },
    { href: 'https://www.linkedin.com/in/brian-mcveigh-79419586/', icon: <LinkedInIcon color="primary" /> },
  ],
};

interface ILinksProps {
  renderAs?: 'table' | 'inline',
}

const LinksTable = ({ renderAs = 'table' }: ILinksProps) => {
  if (renderAs === 'inline') {
    return (
      <Grid container>
        {data.links.map(link => (
          <React.Fragment key={link.href}>
            <Grid sx={{ marginLeft: 1, marginRight: 1 }}>{link.icon}</Grid>
            <Grid>
              <Link href={link.href} target="_blank" rel="noopener">
                {link.href}
              </Link>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    );
  }

  return (
    <Box component={Paper} sx={{ maxWidth: 500, p: 3, mt: 4 }}>
      <Table>
        <TableBody>
          {data.links.map(link => (
            <TableRow key={link.href}>
              <TableCell>
                {link.icon}
              </TableCell>
              <TableCell>
                <Link href={link.href} target="_blank" rel="noopener">
                  {link.href}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LinksTable;
