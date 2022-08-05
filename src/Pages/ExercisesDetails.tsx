import { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData, exerciesOptions, YoutubeOptions } from "../utils/FetchData";

// Components
import Details from "../Components/Details-Page/Details";
import ExerciseVideos from "../Components/Details-Page/ExerciseVideos";
import SimilerExercises from "../Components/Details-Page/SimilerExercises";

export default function ExersizeDetails() {
  const [exerciseDetails, setExerciseDetails] = useState<Array<any>>();
  const [exerciseVideo, setExerciseVideo] = useState({});
  const [targetMuscleExercise, setTargetMuscleExercise] = useState<Array<any>>(
    [] as Array<any>
  );
  const [equipmentExercise, setEquipmentExercise] = useState<Array<any>>(
    [] as Array<any>
  );

  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  // const EXERSISE_URL = "https://exercisedb.p.rapidapi.com";
  //
  useEffect(() => {
    const fetchExercises = async () => {
      const EXERSISE_URL = "https://exercisedb.p.rapidapi.com";
      const YOUTUBE_SEARCH_URL =
        "https://simple-youtube-search.p.rapidapi.com/search";

      const exerciseFetchedData = await fetchData(
        `${EXERSISE_URL}/exercises/exercise/${id}`,
        exerciesOptions,
        setLoading
      );
      setExerciseDetails(exerciseFetchedData);
      const exerciseTerm = exerciseFetchedData[1].name
        .trim()
        .replace(/\s/g, "");
      const ytFetchData = await fetchData(
        `${YOUTUBE_SEARCH_URL}?query=${exerciseTerm}`,
        YoutubeOptions,
        setLoading
      );
      setExerciseVideo(ytFetchData);

      const TARGET_URL = `${EXERSISE_URL}/exercises/target/${
        exerciseDetails?.at(1).target
      }`;
      const EQUIPMENT_URL = `${EXERSISE_URL}/exercises/equipment/${
        exerciseDetails?.at(1).equipment
      }`;

      const targetMuscleExerciseData = await fetchData(
        TARGET_URL,
        exerciesOptions,
        setLoading
      );
      const equipmentExerciseData = await fetchData(
        EQUIPMENT_URL,
        exerciesOptions,
        setLoading
      );
      if (!targetMuscleExerciseData[0])
        setTargetMuscleExercise(targetMuscleExerciseData);
      if (!equipmentExercise[0]) setEquipmentExercise(equipmentExerciseData);
    };
    fetchExercises();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} loading={loading} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        exerciseName={exerciseDetails?.at(1)?.name}
      />
      <SimilerExercises
        TargertExercises={targetMuscleExercise}
        eqipmentExercise={equipmentExercise}
      />
    </Box>
  );
}
