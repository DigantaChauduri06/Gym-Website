import { Box } from "@mui/material";
import BodyPart from "./Main-Page/BodyPart";

type PropType = {
  data: string[];
};

const HorizontalScrollbar = ({ data }: PropType) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "repeat(11, 1fr)",
          md: "repeat(6, 1fr)",
          xs: "repeat(3, 1fr)",
        },
      }}
    >
      {data.map((item, idx) => (
        <Box
          title={item}
          itemID={item}
          key={idx}
          sx={{
            m: "20px 15px",
          }}
        >
          <BodyPart data={item} />
        </Box>
      ))}
    </Box>
  );
};
export default HorizontalScrollbar;
