import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import React from "react";

type Props = {};

const cleanOptions = ["Guest Clean", "Water Softener", "Pool"];

const HomePage = (props: Props) => {
  return (
    <Stack>
      <Autocomplete
        multiple
        options={cleanOptions}
        renderInput={(params) => {
          return (
            <TextField {...params} label="Chores" placeholder="Choose Chores" />
          );
        }}
      />
    </Stack>
  );
};

export default HomePage;
