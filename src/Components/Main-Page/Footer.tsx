import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#eee8dca3",
        height: "10vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Typography
        variant="h6"
        style={{
          marginLeft: "26px",
        }}
      >
        {" "}
        ©️©️ Terms and condition apply
      </Typography>
      <Typography
        style={{
          marginLeft: "26px",
        }}
      >
        {" "}
        💗 Dignata Chaudhuri
      </Typography>
    </Box>
  );
}
