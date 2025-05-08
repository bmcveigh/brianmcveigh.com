import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IPageTemplate {
  children: any,
  title: string,
}

const PageTemplate = ({ children, title }: IPageTemplate) => (
  <Box>
    <Typography variant="h3">{title}</Typography>
    <Box>
      {children}
    </Box>
  </Box>
);

export default PageTemplate;
