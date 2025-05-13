import { Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface GitHubRibbonProps {
  username: string;
  repository: string;
}

const GitHubRibbon = ({ username, repository }: GitHubRibbonProps) => (
  <Box
    sx={{
      display: { xs: 'none', md: 'block' },
      position: 'absolute',
      top: 0,
      right: 0,
      width: 200,
      height: 200,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}
  >
    <Link
      href={`https://github.com/${username}/${repository}`}
      target="_blank"
      rel="noopener"
      sx={{
        position: 'fixed',
        top: 100,
        right: -50,
        transform: 'rotate(45deg)',
        backgroundColor: 'primary.main',
        color: 'common.white',
        padding: '8px 60px',
        textDecoration: 'none',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        pointerEvents: 'auto',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
        whiteSpace: 'nowrap',
      }}
    >
      <GitHubIcon fontSize="small" />
      Fork Me
    </Link>
  </Box>
);

export default GitHubRibbon;