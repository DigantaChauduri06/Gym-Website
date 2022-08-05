import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "../HorizontalScrollbar";
import { GridLoader } from "react-spinners";
import { CSSProperties } from "react";
import ExerciseCard from "../Main-Page/ExerciseCard";
import { exerciseObj } from "../../all.types";
import Footer from "../Main-Page/Footer";

type SimmilerExerciseProp = {
  TargertExercises: any[];
  eqipmentExercise: any[];
};

const SimilerExercises = ({
  TargertExercises,
  eqipmentExercise,
}: SimmilerExerciseProp) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  console.log({ eqipmentExercise, TargertExercises });

  if (!Array.isArray(TargertExercises) || !Array.isArray(eqipmentExercise)) {
    return (
      <Box height="50vh">
        <GridLoader
          loading={
            !Array.isArray(
              !Array.isArray(TargertExercises) ||
                !Array.isArray(eqipmentExercise)
            )
          }
          color="#ff2625"
          cssOverride={override}
          size={30}
        />
        <Typography variant="h4" textAlign="center">
          Hang On...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0px" },
      }}
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{
          p: "2",
          position: "relative",
          gap: "120px",
        }}
      >
        {TargertExercises &&
          TargertExercises?.at(1)
            ?.slice(0, 3)
            .map((item: exerciseObj) => (
              <ExerciseCard data={item} key={item.id} />
            ))}
      </Stack>
      <Footer />
    </Box>
  );
};
export default SimilerExercises;

// <Typography
//   variant="h3"
//   sx={{
//     mb: "40px",
//   }}
// >
//   Exercises of same muscle{" "}
//   <span style={{ color: "#ff2625" }}>
//     {/* ({TargertExercises[1][0].bodyPart}) */}
//   </span>{" "}
// </Typography>
