import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Background from "../../Components/Background";
import BreadCrums from "../../Components/BreadCrums";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userName = "Acme Corporation";
  const userCode = "ACME-001";
  const userEmail = "noman.naeem@salseflo.com";
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Users", path: "/users" },
    { label: "View" },
  ];
  return (
    <Box
      bgcolor={"background.paper"}
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={2}
      p={2}
      >
        {/* Breadcrumbs */}
        <Box
        position={'relative'}
        width={'85%'}
        >
          <BreadCrums items={breadcrumbItems} />
        </Box>

        {/* Main Content Area */}
        <Box
        component={Paper}
        position={'relative'}
          sx={{
            width: "85%",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            
          }}
        >
          {/* Header Section */}
          <Box>
            <Stack spacing={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                Edit Users Details
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Update the information for this Users below.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Users Information
              </Typography>
            </Stack>
          </Box>

          {/* Customer Information Section */}
          <Stack spacing={3} pl={3} maxWidth={'100%'}>
            {" "}
            <Typography variant="h7">User Name</Typography>
            <Typography variant="h6" pl={4}>
              {userName}
            </Typography>
            <Typography variant="h7">User Code</Typography>
            <Typography variant="h6" pl={4}>
              {userCode}
            </Typography>
            <Typography variant="h7">User Email</Typography>
            <Typography variant="h6" pl={4}>
              {userEmail}
            </Typography>
          </Stack>

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/users")}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserEdit;
