import { Box, Stack, Typography } from "@mui/material";
import { MyContext } from "../../Pages/Home";
import { useContext } from "react";
import Icon from "../../assets/icons/gym.png";
type bodyPartprop = {
  data: string;
};

const BodyPart = ({ data }: bodyPartprop) => {
  const { bodyPart, exercises, setBodyPart } = useContext(MyContext);

  function HandleClick() {
    setBodyPart(data);

    window.scroll({ top: 1800, left: 100, behavior: "smooth" });
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      component="button"
      className="bodyPart-card"
      sx={
        bodyPart === data
          ? {
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid #ff2625",
            }
          : {
              border: "none",
              backgroundColor: "transparent",
            }
      }
      onClick={HandleClick}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{
          width: "50px",
          cursor: "pointer",
        }}
      />
      <Typography
        sx={{
          fontSize: "18px",
        }}
      >
        {data
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
