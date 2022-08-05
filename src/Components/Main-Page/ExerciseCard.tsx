import { exerciseObj } from "../../all.types";
import { Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ data }: { data: exerciseObj }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${data.id}`}>
      {data && (
        <Stack direction="column" gap="30px">
          <img src={data.gifUrl} loading="lazy" alt={data.name} />
          <Stack direction="row" gap="30px" justifyContent="center">
            <Button
              sx={{
                backgroundColor: "#ffa9a9",
                borderRadius: "14px",
                color: "#fff",
                gap: "15px",
              }}
            >
              {data.name}
            </Button>
            <Button
              sx={{
                backgroundColor: "#fcc757",
                borderRadius: "14px",
                color: "#fff",
                gap: "15px",
              }}
            >
              {data.target}
            </Button>
          </Stack>
        </Stack>
      )}
    </Link>
  );
};
export default ExerciseCard;
