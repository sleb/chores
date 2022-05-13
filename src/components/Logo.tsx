import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton href="/">
        <CleaningServicesIcon sx={{ mr: 1 }} />
      </IconButton>
      <Typography variant="h6">Gamble House Chores</Typography>
    </Box>
  );
};

export default Logo;
