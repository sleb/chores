import Grid from "@mui/material/Grid";
import React from "react";
import GambleHouse from "../../images/gamble-house.webp";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        md={7}
        sx={{
          backgroundImage: `url(${GambleHouse})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item md={5} sx={{ display: "flex", flexDirection: "row" }}></Grid>
    </Grid>
  );
};

export default LoginPage;
