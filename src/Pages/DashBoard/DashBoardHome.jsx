import {
  Box,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BoyIcon from "@mui/icons-material/Boy";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const DashBoardHome = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={'center'}
      gap={2}
      bgcolor={"background.paper"}
      minHeight={'100%'}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        textAlign={"center"}
        mt={3}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Dashboard!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's a quick overview and access to key functionalities.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"Wrap"}
        gap={3/2}
        position={'relative'}
        mb={2}
      >
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <PeopleIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" gutterBottom>
              Manage Customers
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              View, edit, and manage all your customer accounts.
            </Typography>
            <Button component={Link} to="/customers" variant="contained">
              Go to Customers
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <GroupAddIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Create New Customer
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Quickly add a new customer to your system.
            </Typography>
            <Button component={Link} to="/customers/create" variant="outlined">
              Add New Customer
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <PersonIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Manage Users
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              View, edit, and manage all your users accounts.
            </Typography>
            <Button component={Link} to="/users" variant="contained">
              Go to Users
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <PersonAddIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Create New Users
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Quickly add a new User to your system.
            </Typography>
            <Button component={Link} to="/users/create" variant="outlined">
              Add New User
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <WorkIcon color="customSwitch" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Manage Crons
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              View, edit, and manage all your Crons.
            </Typography>
            <Button component={Link} to="/jobs/crons" variant='contained'>
              Go to jobs
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <AddBoxIcon color="customSwitch" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Create New Cron
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Quickly add new Cron to your system.
            </Typography>
            <Button component={Link} to="/jobs/crons/create" variant="outlined">
              Add New Cron
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <BoyIcon color="warning" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Manage Clients Crons
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Edit, and manage all your Clients Cron.
            </Typography>
            <Button component={Link} to="/jobs/cron-clients" variant='contained'>
              Go to Clients Cron
            </Button>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={1}
            sx={{
              textAlign: "center",
              height: "250px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <PlaylistAddIcon color="warning" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Create New Clients Cron
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Quickly add new Cron to your system.
            </Typography>
            <Button component={Link} to="/jobs/cron-clients/create" variant="outlined">
              Add New Client Cron 
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default DashBoardHome;
