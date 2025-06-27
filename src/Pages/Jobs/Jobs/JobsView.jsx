import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrums from "../../../Components/BreadCrums";

const JobView = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const jobTitle = "Acme Corporation";
  const jobCode = "ACME-001";
  const jobFunctionName = "SalesFlo Function";
  const jobFunctionURL = "www.Salesflo.com";
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Crons", path: "/jobs/crons" },
    { label: "View" },
  ];
  return (
    <Box
      bgcolor={"background.paper"}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      gap={2}
      p={2}
    >
      <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'85%'}
      position={'relative'}
      gap={5}
      >
        {/* Breadcrumbs */}
        <Box
        width={'100%'}
        >
          <BreadCrums items={breadcrumbItems} />
        </Box>
        {/* Main Content Area */}
        <Box
        component={Paper}
        p={5}
        width={'100%'}
        >
          {/* Header Section */}
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              View Jobs Details
            </Typography>
            <Typography variant="body1" color="text.secondary">
              View the information for this Jobs below.
            </Typography>
          </Box>

          {/* Customer Information Section */}
          <Stack spacing={3}>
            {" "}
            <Typography variant="h6" component="h2" gutterBottom>
              Jobs Information
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1" component="h2">
                Job Title
              </Typography>
              <Typography variant="h6" component="h2" pl={4} >
                {jobTitle}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                Job Code
              </Typography>
              <Typography variant="h6" component="h2" pl={4} >
                {jobCode}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                Job Function Name
              </Typography>
              <Typography variant="h6" component="h2" pl={4} >
                {jobFunctionName}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                Job Function URL
              </Typography>
              <Typography variant="h6" component="h2" pl={4} >
                {jobFunctionURL}
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/jobs/crons")}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default JobView;
