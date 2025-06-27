import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box width={"100vw"} height={"100vh"}>
      <Box
        width={"100%"}
        height={"100%"}
        position="absolute"
        top={0}
        overflow={"hidden"}
      >
        <img
          src="https://www.engage.salesflo.com/_next/static/media/bg1.82f04dc8.png"
          alt=""
          className="bg-main"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box position="absolute" bottom={0} left={-60}>
        <img
          id="bg-logo"
          src="https://www.engage.salesflo.com/_next/static/media/dashboard.a5683484.png"
          alt=""
        />
      </Box>
      <Box
        width={"100%"}
        height={"100%"}
        display="flex"
        flexDirection={{
          xl: "row",
          lg: "row",
          md: "low",
          sm: "column",
          xs: "column",
        }}
        gap={{ xl: "0", lg: "0", md: "0", sm: "15px", xs: "15px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={{ xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h2" fontWeight="bold">
            {" "}
            Let's Get Started!
          </Typography>
        </Box>
        <Box
          width={{ xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={"100%"}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              // border="2px solid black"
              borderRadius={3}
              padding={"12%"}
              // bgcolor={"white"}
              boxShadow={'5px 10px 5px 5px  #888888'}
              component={Paper}
              zIndex={10}
              
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <img
                  src="https://www.engage.salesflo.com/_next/static/media/icon.e9e2124a.png"
                  alt=""
                />
                <Typography fontSize="27px" fontWeight="700">
                  Engage Master Portal
                </Typography>
                <Typography fontSize="14px" fontWeight="550">
                  Please Login to start your session
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={3}
                marginTop={2}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{
                    width: {
                      xl: "150%",
                      lg: "150%",
                      md: "120%",
                      sm: "120%",
                      xm: "120%",
                    },
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx={{
                    width: {
                      xl: "150%",
                      lg: "150%",
                      md: "120%",
                      sm: "120%",
                      xm: "120%",
                    },
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Box>
              <Box marginTop={2}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onSubmit={""}
                  type="Link"
                  LinkComponent={Link}
                  to="/dashboard"
                  color="primary"
                >
                  Let's Engage
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        position="absolute"
        gap={1}
        bottom={10}
        right={20}
        fontSize={"14px"}
      >
        <Typography fontWeight="500">Powered by</Typography>
        <Typography fontWeight="bold">Salesflo</Typography>
      </Box>
    </Box>
  );
};
export default Login;
