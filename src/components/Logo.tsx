import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box mr={2} sx={{ display: "flex", alignItems: "center" }}>
      <IconButton href="/">
        <CleaningServicesIcon sx={{ mr: 1 }} />
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
