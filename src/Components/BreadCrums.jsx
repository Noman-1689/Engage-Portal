import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrums = ({ items }) => {
  return (
    <Box>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return isLast ? (
            <Typography
              variant="body2"
              color="primary"
              fontWeight="bold"
              key={item.label}
            >
              {item.label}
            </Typography>
          ) : (
            <Link
              underline="hover"
              color="inherit"
              component={Link}
              to={item.path}
              key={item.label}
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrums;
