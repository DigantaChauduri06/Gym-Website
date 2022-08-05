import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../Components/Main-Page/HeroBanner";
import Exercises from "../Components/Main-Page/Exercises";
import { createContext } from "react";
import { exerciseObj } from "../all.types";

type contextType = {
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  exercises: exerciseObj[];
  setExercises: React.Dispatch<React.SetStateAction<exerciseObj[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  // urlParams: string;
  // setUrlParams: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<contextType>({} as contextType);

export default function Home() {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<Array<any>>([] as any[]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [urlParams, setUrlParams] = useState<string>("/");

  const sent = {
    bodyPart,
    exercises,
    setBodyPart,
    setExercises,
    setLoading,
    loading,
    // urlParams,
    // setUrlParams,
  };
  return (
    <Box>
      <HeroBanner />
      <MyContext.Provider value={sent}>
        {/* <SearchBar /> */}
        <Exercises />
      </MyContext.Provider>
    </Box>
  );
}
