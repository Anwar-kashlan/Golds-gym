import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const VideosEx = ({ exercisesVideoSe, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h3" mb="33px">
        watch <span style={{ color: "#ff2625" }}>{name}</span> exercise video
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { sm: "row" },
          gap: { md: "100px", sm: "50px", xs: "0" },
        }}
      >
        {exercisesVideoSe.length ? (
          exercisesVideoSe.slice(0, 3).map((item, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              className="exercise-video"
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: "50px" }}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default VideosEx;
