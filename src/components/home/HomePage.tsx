import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import Gh from "../../images/gh.png";
import { userState } from "../../state/user";

type Props = {};

const HomePage = (props: Props) => {
  const user = useRecoilValue(userState);

  return (
    <Stack spacing={2} alignSelf="center">
      <Box>
        <Typography align="center" variant="h6">
          Welcome to Gamble House Chores
        </Typography>
        <Typography align="center" variant="subtitle2">
          {user
            ? "Choose an option from the menu to get started"
            : "Log in to get started"}
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
