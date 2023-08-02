import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExercisesCard from "./ExercisesCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exerceses = ({ exercises, setExercise, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfTheLastEx = currentPage * exercisesPerPage;
  const indexOfTheFirstEx = indexOfTheLastEx - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfTheFirstEx, indexOfTheLastEx);
  const paginat = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fatchDataExercises = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercise(exercisesData);
    };
    fatchDataExercises();
  }, [bodyPart, setExercise]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            size="large"
            shape="rounded"
            defaultPage={1}
            color="standard"
            page={currentPage}
            onChange={paginat}
            count={Math.ceil(exercises.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exerceses;
