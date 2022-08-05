import { Box, Typography, Stack, Button } from "@mui/material";
import styled from "styled-components";

import Banner from "../../assets/images/banner.png";

export default function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "122px", xs: "70px" },
        ml: { sm: "70px", xs: "30px" },
        position: "relative",
        p: "20px",
        height: { lg: "90vh", xs: "50vh" },
      }}
    >
      <Typography
        color="#FF2625"
        fontWeight="600"
        sx={{
          fontSize: { md: "35px", xs: "26px" },
          letterSpacing: { md: "3px", xs: "1px" },
        }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { md: "50px", xs: "25px", sm: "30px" },
        }}
        lineHeight="1.5"
        letterSpacing="3px"
        alignItems="center"
      >
        Sweat, Smile, <br />
        and Repeat
      </Typography>
      <Typography
        sx={{
          fontSize: { md: "22px" },
          mt: { md: "40px" },
        }}
      >
        Checkout the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="warning"
        sx={{
          mt: { md: "30px", xs: "20px" },
          width: { md: "220px", xs: "150px" },
          fontSize: { md: "15px", xs: "10px" },
          p: { md: "12px", xs: "6px" },
        }}
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#FF2625"
        sx={{
          opacity: 0.15,
          display: { lg: "block", xs: "none" },
          mt: "90px",
        }}
      >
        Exercises
      </Typography>
      <Image src={Banner} alt="Banner-img" />
    </Box>
  );
}

const Image = styled.img`
  position: absolute;
  top: -160px;
  right: 0;
  border-radius: 0 20px;
  height: 90vh;
  z-index: -1;
  @media only screen and (max-width: 1080px) {
    display: none;
  }

  @media only screen and (max-width: 1280px) {
    width: 700px;
    height: auto;
  }
  @media only screen and (max-width: 1180px) {
    width: 590px;
    height: auto;
  }
`;
