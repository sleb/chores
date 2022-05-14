import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Box m={1}>
      <Header />
      <Container fixed sx={{ py: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
