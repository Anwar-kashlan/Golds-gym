import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack alignItems="center" gap="40px" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by M.A.K
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
