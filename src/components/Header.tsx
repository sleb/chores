import {
  AccountCircle,
  Add,
  Group,
  Login,
  Logout,
  PlayArrow,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../state/user";
import Gravatar from "./Gravatar";
import Logo from "./Logo";

type Page = { title: string; icon: ReactNode; path: string };
const pages: Page[] = [
  {
    title: "New Clean",
    icon: <Add fontSize="small" />,
    path: "new-clean",
  },
  {
    title: "Continue Clean",
    icon: <PlayArrow fontSize="small" />,
    path: "continue",
  },
  {
    title: "Join Clean",
    icon: <Group fontSize="small" />,
    path: "join",
  },
];

type Props = {};

const Header = (props: Props) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [profileAnchor, setProfileAnchor] = useState<HTMLElement | null>(null);
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState); // remove

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleLogin = () => {
    setUser({ email: "scott.g.lebaron@gmail.com" });
    handleProfileClose();
    handleMenuClose();
  };

  const handleLogout = () => {
    setUser(null);
    handleProfileClose();
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user &&
              pages.map((page, index) => (
                <Button
                  key={index}
                  startIcon={page.icon}
                  variant="outlined"
                  component={Link}
                  to={page.path}
                  sx={{ mx: 1, color: "white" }}
                >
                  {page.title}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { md: "none", xs: "flex" } }}>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon sx={{ color: "primary.contrastText" }} />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={!!menuAnchor}
              onClose={handleMenuClose}
            >
              <MenuList>
                {user ? (
                  [
                    <MenuItem key="avatar">
                      <ListItemAvatar>
                        <Gravatar user={user} />
                      </ListItemAvatar>
                    </MenuItem>,
                    <MenuItem key="logout" onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      <ListItemText>Log Out</ListItemText>
                    </MenuItem>,
                  ]
                ) : (
                  <MenuItem onClick={handleLogin}>
                    <ListItemIcon>
                      <Login />
                    </ListItemIcon>
                    <ListItemText>Log In</ListItemText>
                  </MenuItem>
                )}
                {user && <Divider />}
                {user &&
                  pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      to={page.path}
                      onClick={handleMenuClose}
                    >
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

          <Box sx={{ display: { md: "flex", xs: "none" }, flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleProfileClick}>
                {user ? (
                  <Gravatar user={user} />
                ) : (
                  <AccountCircle sx={{ color: "primary.contrastText" }} />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={profileAnchor}
              open={!!profileAnchor}
              onClose={handleProfileClose}
            >
              <MenuList>
                {user ? (
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleLogin}>
                    <ListItemIcon>
                      <Login />
                    </ListItemIcon>
                    <ListItemText>Log In</ListItemText>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
