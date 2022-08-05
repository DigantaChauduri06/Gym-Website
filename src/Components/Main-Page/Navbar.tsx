import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/Logo.png";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "30px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          width="48px"
          style={{ margin: "0px 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link style={{ borderBottom: "3px solid #FF2625" }} to="/">
          Home
        </Link>
        <HashLink smooth to="#exercises">
          Exercises
        </HashLink>
        <Link
          to="/premium"
          className="premium-btn"
          style={{
            color: "#faaf00",
          }}
        >
          Premium
        </Link>
      </Stack>
    </Stack>
  );
}
