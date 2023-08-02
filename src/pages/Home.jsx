import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchEx from "../components/SearchEx";
import Exerceses from "../components/Exerceses";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchEx
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exerceses
        exercises={exercises}
        setExercise={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
