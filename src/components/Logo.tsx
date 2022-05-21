import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box mr={2} sx={{ display: "flex", alignItems: "center" }}>
      <IconButton href="/" sx={{ mr: 1 }}>
        <CleaningServicesIcon sx={{ color: "primary.contrastText" }} />
      </IconButton>
      <Typography
        variant="h6"
        fontFamily="monospace"
        fontWeight="bold"
        sx={{ letterSpacing: ".5rem" }}
      >
        CHORES
      </Typography>
    </Box>
  );
};

export default Logo;
