import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DetailEx from "../components/DetailEx";
import VideosEx from "../components/VideosEx";
import SimilarEx from "../components/SimilarEx";
import { useParams } from "react-router-dom";
import { exerciseOptions, videoOptions, fetchData } from "../utils/fetchData";

const ExerciseDetails = () => {
  const [exercisesDetails, setExercisesDetails] = useState({});
  const [exercisesVideoSe, setexercisesVideoSe] = useState([]);
  const [targetEx, setTargetEx] = useState([]);
  const [equipmentEx, setEquipmentEx] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesDbApi = "https://exercisedb.p.rapidapi.com";
      const videoExApi = "https://youtube-search-and-download.p.rapidapi.com";

      const exercisesDetailsData = await fetchData(
        `${exercisesDbApi}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDetails(exercisesDetailsData);
      const exerciseVideoData = await fetchData(
        `${videoExApi}/search?query=${exercisesDetailsData.name}`,
        videoOptions
      );
      setexercisesVideoSe(exerciseVideoData.contents);

      const targetExercisesData = await fetchData(
        `${exercisesDbApi}/exercises/target/${exercisesDetailsData.target}`,
        exerciseOptions
      );
      setTargetEx(targetExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exercisesDbApi}/exercises/equipment/${exercisesDetailsData.equipment}`,
        exerciseOptions
      );
      setEquipmentEx(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <DetailEx exercisesDetails={exercisesDetails} />
      <VideosEx
        exercisesVideoSe={exercisesVideoSe}
        name={exercisesDetails.name}
      />
      <SimilarEx targetEx={targetEx} equipmentEx={equipmentEx} />
    </Box>
  );
};

export default ExerciseDetails;
