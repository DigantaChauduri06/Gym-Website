import { Box, Stack, Typography } from "@mui/material";
import { GridLoader } from "react-spinners";
import { CSSProperties } from "react";

type exerciseVideoType = {
  exerciseVideo: any;
  exerciseName: any;
};
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ExerciseVideos = ({ exerciseVideo, exerciseName }: exerciseVideoType) => {
  if (!Array.isArray(exerciseVideo))
    return (
      <Box height="50vh">
        <GridLoader
          loading={!Array.isArray(exerciseVideo)}
          color="#ff2625"
          cssOverride={override}
          size={30}
        />
        <Typography variant="h4" textAlign="center">
          Hang On...
        </Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        mt: { lg: "40px", xs: "26px" },
        p: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { lg: "30px", xs: "20px" },
        }}
      >
        Watch How To Do{" "}
        <span
          style={{
            color: "#ff2625",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {" "}
          {exerciseName}??
        </span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0px" },
        }}
      >
        {exerciseVideo[1].results.slice(0, 6).map((item: any) => (
          <a
            key={item.id}
            className="exercise-video"
            href={item.url}
            title={item.title}
            rel="noreferrer"
            target="_blank"
          >
            <img src={item.thumbnail.url} alt="Video" />
            <Box>
              <Typography variant="h5">{item.title}</Typography>
              <Typography>{item.channel.name}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
