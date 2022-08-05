import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

// Pages / Components
import Navbar from "./Components/Main-Page/Navbar";
import Home from "./Pages/Home";
import ExersizeDetails from "./Pages/ExercisesDetails";
import Footer from "./Components/Main-Page/Footer";

function App() {
  function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }
  hashLinkScroll();
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExersizeDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
