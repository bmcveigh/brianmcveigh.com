import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface IPageTemplate {
  children: any,
  title: string,
}

const PageTemplate = ({ children, title }: IPageTemplate) => (
  <Box>
    <Typography variant="h3">{title}</Typography>
    <Typography>
      {children}
    </Typography>
  </Box>
);

export default PageTemplate;
