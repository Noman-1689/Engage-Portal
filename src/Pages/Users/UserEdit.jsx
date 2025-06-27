import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import Background from "../../Components/Background";
import BreadCrums from "../../Components/BreadCrums";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Acme Corporation");
  const [userCode, setUserCode] = useState("ACME-001");
  const [userEmail, setUserEmail] = useState("noman.naeem@salseflo.com");
  const [userPassword, setUserPassword] = useState("user.salesflo");
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Users", path: "/users" },
    { label: "Edit" },
  ];
  const handleSave = () => {
    console.log("Saving data:", {
      userName,
      userCode,
      userEmail,
    });
    alert("User saved")
    navigate('/users')
  };

  return (
    <Box
    bgcolor={"background.paper"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'85%'}
      p={2}
      gap={2}
      >
        {/* Breadcrumbs */}
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'start'}
          width={'100%'}
        >
          <BreadCrums items={breadcrumbItems} />
        </Box>

        {/* Main Content Area */}
        <Box
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        position={'relative'}
        component={Paper}
        p={5}
        >
          {/* Header Section */}
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Edit Users Details
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Update the information for this Users below.
            </Typography>
          </Box>

          {/* Customer Information Section */}
          <Stack spacing={3}>
            {" "}
            <Typography variant="h6" component="h2" gutterBottom>
              Users Information
            </Typography>
            <TextField
              fullWidth
              label="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              variant="outlined"
              helperText="Enter the full legal user name"
            />
            <TextField
              fullWidth
              label="User Code"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              variant="outlined"
              helperText="Internal user identifier"
            />
            <TextField
              fullWidth
              label="User Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              variant="outlined"
              helperText="Internal user identifier"
            />
            <TextField
              fullWidth
              label="User Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              variant="outlined"
              // helperText="Internal user identifier"
            />
          </Stack>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}
          >
            <Button variant="outlined" onClick={()=>navigate('/users')}>
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

export default UserEdit;
