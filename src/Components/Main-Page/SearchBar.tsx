import { useState, useEffect, useRef, useContext, useMemo } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { exerciesOptions, fetchData } from "../../utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { MyContext } from "../../Pages/Home";

const EXERSIZE_API_URL = `https://exercisedb.p.rapidapi.com/exercises`;
function SearchBar() {
  const { setExercises, setLoading } = useContext(MyContext);
  const rendered = useRef(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [bodyParts, setBodyParts] = useState<string[]>([] as string[]);

  useEffect(() => {
    if (rendered.current < 1) {
      // setLoading(true);
      async function fetchExercises() {
        const [AnyError, allExercise] = await fetchData(
          EXERSIZE_API_URL,
          exerciesOptions,
          setLoading
        );
        if (AnyError) {
          setError(JSON.stringify(allExercise));
          return;
        }
        setExercises(allExercise);

        // BODY PARTS FETCH
        const [error, data] = await fetchData(
          EXERSIZE_API_URL + "/bodyPartList",
          exerciesOptions,
          setLoading
        );
        if (error) {
          setError(JSON.stringify(data));
          return;
        }
        if (Array.isArray(data)) {
          setBodyParts(["all", ...data]);
        }
      }
      fetchExercises();
    }
    rendered.current += 1;
    return () => {};
  }, []);

  async function handleSearch() {
    if (!search) {
      return;
    }
    const [error, data] = await fetchData(
      EXERSIZE_API_URL,
      exerciesOptions,
      setLoading
    );
    if (error) {
      if (typeof data === "string") setError(data);
      return;
    }

    if (Array.isArray(data)) {
      const searchedExersizes = data.filter((item) => {
        return (
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
        );
      });
      setExercises(searchedExersizes);
      window.scroll({ top: 1800, left: 100, behavior: "smooth" });
    }
  }

  if (error) {
    return <Box>Something went wrong...</Box>;
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        textAlign="center"
        letterSpacing="2px"
        mt="0px"
        mb="40px"
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          id="outlined-basic"
          label="Exercises"
          variant="outlined"
          size="medium"
          fullWidth
          color="warning"
          sx={{
            width: { lg: "1100px", md: "700px", xs: "300px" },
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
              fontSize: "18px",
            },
          }}
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#FFF",
            width: { lg: "120px", md: "100px", xs: "50px" },
            height: "50px",
            ml: { lg: "15px", xs: "5px" },
            mt: "3px",
            borderRadius: "10px",
            right: "0",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
}

export default SearchBar;
