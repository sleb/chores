import { createTheme } from "@mui/material/styles";
import dayjs from "dayjs";

const getMode = (): "dark" | "light" => {
  const time = dayjs().hour();
  return time > 6 && time < 20 ? "light" : "dark";
};

const theme = createTheme({ palette: { mode: getMode() } });

export default theme;
