import { useEffect, useState, useContext, CSSProperties } from "react";
import React from "react";
import GridLoader from "react-spinners/ClipLoader";
import { exerciseObj } from "../../all.types";
import "../../CSS/Exercies.css";

import { Pagination, Box, Stack, Typography } from "@mui/material";
import { fetchData, exerciesOptions } from "../../utils/FetchData";

import ExerciseCard from "./ExerciseCard";
import { MyContext } from "../../Pages/Home";

const EXERCISES_PER_PAGE = 9;
const EXERSIZE_API_URL = `https://exercisedb.p.rapidapi.com/exercises`;

export default function Exercises() {
  const { bodyPart, exercises, setExercises, loading, setLoading } =
    useContext(MyContext);

  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [end, setEnd] = useState<number>(EXERCISES_PER_PAGE);
  /**
   * 1 2 3 4
   * (0,8),(8,16)
   */
  const end = currentPage * 9 - currentPage + 1;
  const exercise = exercises.slice(end - EXERCISES_PER_PAGE, end);

  function paginate(e: React.ChangeEvent<any>, value: number) {
    setCurrentPage(value);
  }

  useEffect(() => {
    async function fetchExercise() {
      const [AnyError, allExercise] = await fetchData(
        EXERSIZE_API_URL,
        exerciesOptions,
        setLoading
      );
      if (bodyPart === "all") {
        setExercises(allExercise);
        return;
      }
      if (AnyError) {
        return <Typography variant="h2">Something Went Wrong...</Typography>;
      }
      const requiredExercises = allExercise.filter(
        (exercise: exerciseObj) => exercise.bodyPart === bodyPart
      );

      setExercises(requiredExercises);
    }
    fetchExercise();
  }, [bodyPart]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
      {loading ? (
        <Box height="50vh">
          <GridLoader
            loading={loading}
            color="#ff2625"
            cssOverride={override}
            size={150}
          />
          <Typography variant="h4" textAlign="center">
            Hang On...
          </Typography>
        </Box>
      ) : (
        <div id="exercises">
          <Typography variant="h3" textAlign="center" mt="30px" mb="30px">
            Showing {exercises ? exercises.length : 0} exercises
          </Typography>
          <Stack mt="100px" alignItems="center">
            {exercises?.length > 9 && (
              <Pagination
                color="standard"
                shape="circular"
                defaultPage={1}
                count={Math.ceil(exercises?.length / EXERCISES_PER_PAGE)}
                size="large"
                page={currentPage}
                onChange={paginate}
              />
            )}
          </Stack>
          <Box className="exercises" height="40vh" mt="30px">
            {exercise?.map((exercise: exerciseObj) => (
              <ExerciseCard key={exercise.id} data={exercise} />
            ))}
          </Box>
        </div>
      )}
    </>
  );
}
