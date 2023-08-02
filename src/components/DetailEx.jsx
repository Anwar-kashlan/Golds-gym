import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { generate } from "shortid";
import Loader from "./Loader";
const DetailEx = ({ exercisesDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetails;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      mt="50px"
      sx={{
        gap: "60px",
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      {gifUrl ? (
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      ) : (
        <Loader />
      )}
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack
            key={generate()}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button
              sx={{
                backgroundColor: "#fff2db",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default DetailEx;
