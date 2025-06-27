import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrums from "../../Components/BreadCrums";

const UserCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [userCode, setUserCode] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Users", path: "/users" },
    { label: "Create" },
  ];
  const handleSave = () => {
    console.log("Saving data:", {
      userName,
      userCode,
      userEmail,
    });
    alert("User Created")
    navigate('/users')
  };

  return (
    <Box
      bgcolor={"background.paper"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
      gap={2}
    >
      {/* Breadcrumbs */}
      <Box
        display={"flex"}
        justifyContent={"left"}
        position={"relative"}
        width= {'85%'}
      >
        <BreadCrums items={breadcrumbItems} />
      </Box>

      {/* Main Content Area */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5 / 2}
        component={Paper}
        width={'85%'}
        padding={5}
        position={"relative"}
      >
        {/* Header Section */}
        <Stack spacing={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Users Details
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Update the information for this Users below.
          </Typography>
        </Stack>

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
          <Button
            variant="outlined"
            onClick={() => navigate("/users")}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave} >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCreate;
