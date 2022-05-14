import { Add, Group, PlayArrow } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon, ListItemText, MenuList } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React, { ReactNode, useState } from "react";
import Logo from "./Logo";

type Page = { title: string; icon: ReactNode };
const pages: Page[] = [
  { title: "New Clean", icon: <Add fontSize="small" /> },
  { title: "Continue Clean", icon: <PlayArrow fontSize="small" /> },
  { title: "Join Clean", icon: <Group fontSize="small" /> },
];

type Props = {};

const Header = (props: Props) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                startIcon={page.icon}
                variant="outlined"
                sx={{ mx: 1, color: "white" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { md: "none", xs: "flex" } }}>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={!!menuAnchor}
              onClose={handleMenuClose}
            >
              <MenuList>
                {pages.map((page, index) => (
                  <MenuItem key={index}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText>{page.title}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>

          <Box sx={{ display: { md: "none", xs: "flex" }, flexGrow: 1 }}>
            <Logo />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
