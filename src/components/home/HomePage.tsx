import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Gh from "../../images/gh.png";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Stack spacing={2} alignSelf="center">
      <Box>
        <Typography align="center" variant="h6">
          Welcome to Gamble House Chores
        </Typography>
        <Typography align="center" variant="subtitle2">
          Choose an option from the menu to get started
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Gh})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          height: { md: 500, xs: 300 },
        }}
      />
    </Stack>
  );
};

export default HomePage;
