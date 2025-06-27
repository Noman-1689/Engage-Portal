import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import BoyIcon from "@mui/icons-material/Boy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Avatar from '@mui/material/Avatar';
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Background from "../Components/Background";
import { useMemo, useState } from "react";

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "customers",
    title: "Customers",
    icon: <PeopleIcon />,
  },
  {
    segment: "jobs",
    title: "Corns",
    icon: <WorkIcon />,
    children: [
      {
        segment: "crons",
        title: "Crons",
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: "cron-clients",
        title: "Clients Corns",
        icon: <BoyIcon />,
      },
    ],
  },

  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Other",
  },
  {
    segment: "users",
    title: "Users",
    icon: <PersonIcon />,
  },
];
// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: "data-toolpad-color-scheme",
//   },
//   colorSchemes: { light: true , dark: true, },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   palette: {
//     primary:{
//       main:'#841c54',
//       light:"#841c54",
//       dark:"#841c54",
//     },
//   },

// });

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#841c54",
          light: "#841c54",
          dark: "#841c54",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#841c54",
          light: "#841c54",
          dark: "#841c54",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#841c54",
    },
  },
});

const AppLayout = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const router = {
    pathname: location.pathname,
    searchParams: searchParams,
    navigate: navigate,
  };

  const [session, setSession] = useState({
    user: {
      name: "Noman Naeem",
      email: "noman.naeem@salesflo.com",
      image: {name},
    },
  });
  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
          },
        });
      },
      signOut: () => {
        navigate("/login");
      },
    };
  }, []);

  return (
    <AppProvider
      session={session}
      router={router}
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        title: "Engage Master Portal",
        logo: (
          <img
            src="https://www.engage.salesflo.com/_next/static/media/icon.e9e2124a.png"
            alt="My Custom Logo"
            style={{ height: 32, width: "auto" }}
          />
        ),
      }}
      authentication={authentication}
    >
      <DashboardLayout>
        <Box
          sx={{
            height: "100%",
            flexGrow: 1,
            overflowY: "auto",
            bgcolor: "#F7F7F7",
          }}
        >
          <Background />
          <Outlet />
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
};
export default AppLayout;
