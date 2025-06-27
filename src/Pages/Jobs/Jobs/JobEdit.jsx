import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrums from "../../../Components/BreadCrums";

const JobEdit = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("Acme Corporation");
  const [jobCode, setJobCode] = useState("ACME-001");
  const [jobFunctionName, setJobFunctionName] = useState("SalesFlo Function");
  const [jobFunctionURL, setJobFunctionURL] = useState("www.Salesflo.com");
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Crons", path: "/jobs/crons" },
    { label: "Edit" },
  ];
  const handleSave = () => {
    console.log("Saving data:", {
      jobTitle,
      jobCode,
      jobFunctionName,
      jobFunctionURL,
    });
    alert("Cron updaed")
    navigate('/jobs/crons')
  };

  return (
    <Box
      bgcolor={"background.paper"}
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      p={5}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'85%'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        gap={2}
      >
        {/* Breadcrumbs */}
        <Box
        width={'100%'}
        >
          <BreadCrums items={breadcrumbItems} />
        </Box>

        {/* Main Content Area */}
        <Box
         display={'flex'}
         flexDirection={'column'}
         width={'100%'}
         p={5}
         component={Paper}
        >
          {/* Header Section */}
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Edit Jobs Details
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Update the information for this Jobs below.
            </Typography>
          </Box>

          {/* Customer Information Section */}
          <Stack spacing={3}>
            {" "}
            <Typography variant="h6" component="h2" gutterBottom>
              Jobs Information
            </Typography>
            <TextField
              fullWidth
              label="Job Name"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              variant="outlined"
              helperText="Enter the full legal job name"
            />
            <TextField
              fullWidth
              label="Job Code"
              value={jobCode}
              onChange={(e) => setJobCode(e.target.value)}
              variant="outlined"
              helperText="Internal job identifier"
            />
            <TextField
              fullWidth
              label="Job Function Name"
              value={jobFunctionName}
              onChange={(e) => setJobFunctionName(e.target.value)}
              variant="outlined"
              helperText="Internal job identifier"
            />
            <TextField
              fullWidth
              label="Job Function URL"
              value={jobFunctionURL}
              onChange={(e) => setJobFunctionURL(e.target.value)}
              variant="outlined"
            />
          </Stack>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/jobs/crons")}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default JobEdit;
