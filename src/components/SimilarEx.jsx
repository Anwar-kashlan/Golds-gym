import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarEx = ({ targetEx, equipmentEx }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "50px" } }}>
      <Typography
        variant="h3"
        mb={5}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      >
        Exercises that target the same{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          muscle group
        </span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb="60px">
        {targetEx.length ? <HorizontalScrollbar data={targetEx} /> : <Loader />}
      </Stack>
      <Typography
        variant="h3"
        mb={5}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      >
        Exercises that use the same{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          equipment
        </span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentEx.length ? (
          <HorizontalScrollbar data={equipmentEx} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarEx;
