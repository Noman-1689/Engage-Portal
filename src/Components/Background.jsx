import { Box } from "@mui/material";

const Background = () => {
  return (
    <Box p={2} position={"absolute"} height={"100%"} width={"100%"} top={0} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box position={'absolute'} top={-50}>
          <img
            src="https://www.engage.salesflo.com/_next/static/media/bg1.82f04dc8.png"
            alt="Background 1"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
        <Box position={'absolute'} bottom={-550} left={20}>
          <img
            src="https://www.engage.salesflo.com/_next/static/media/bg1.82f04dc8.png"
            alt="Background 1"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            id="img2"
          />
        </Box>

        <Box position={'absolute'} bottom={-100} left={-50}>
          <img
            id="bg-logo"
            src="https://www.engage.salesflo.com/_next/static/media/dashboard.a5683484.png"
            alt="Dashboard Logo"
            // style={{ width: "52px", height: "52px", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Background;
