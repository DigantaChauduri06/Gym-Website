import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import equimentImage from "../../assets/icons/equipment.png";
import { exerciseObj } from "../../all.types";

type detailsProp = any;

const Details = ({ exerciseDetails, loading }: any) => {
  if (!Array.isArray(exerciseDetails)) return <Typography></Typography>;
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails[1];

  const exerciseDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: equimentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="120px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt="exercise-image"
        loading="lazy"
        className="detail-image"
      />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography variant="h3" style={{ textTransform: "capitalize" }}>
          {name}
        </Typography>
        <Typography>
          Exercise can help prevent excess weight gain or help maintain weight
          loss. When you engage in physical activity, you burn calories. The
          more intense the activity, the more calories you burn.
        </Typography>
        {exerciseDetail.map((item) => (
          <Stack direction="row" alignItems="center" gap="24px" key={item.name}>
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "16px",
                width: "50px",
                height: "50px",
              }}
            >
              <img src={item.icon} alt={item.name} loading="lazy" />
            </Button>
            <Typography style={{ textTransform: "capitalize" }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Details;
