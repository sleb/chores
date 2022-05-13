import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { md: "none", xs: "flex" } }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { md: "none", xs: "flex" }, flexGrow: 1 }}>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </AppBar>
      <Container fixed sx={{ paddingTop: 2 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
