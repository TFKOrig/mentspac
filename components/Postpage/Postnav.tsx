import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const Postnav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [CurrentTab, setTab] = useState(List.index);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          margin: "0 auto",
          marginTop: "3vh",
          width: "50%",
        }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "rgb(2, 61, 138, 1)", borderRadius: "10px" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" }, margin: "0" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                color: "black",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  width: "6vw",
                  backgroundColor: "rgb(207, 247, 255, 1)",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgb(207, 247, 255, 1)", // Override hover color
                  },
                }}
              >
                Posts
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "6vw",
                  backgroundColor: "rgb(207, 247, 255, 1)",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgb(207, 247, 255, 1)", // Override hover color
                  },
                }}
              >
                Followers
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "6vw",
                  backgroundColor: "rgb(207, 247, 255, 1)",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgb(207, 247, 255, 1)", // Override hover color
                  },
                }}
              >
                Following
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "6vw",
                  backgroundColor: "rgb(207, 247, 255, 1)",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgb(207, 247, 255, 1)", // Override hover color
                  },
                }}
              >
                Videos
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem component="button">
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem component="button">
              <ListItemText primary="Followers" />
            </ListItem>
            <ListItem component="button">
              <ListItemText primary="Following" />
            </ListItem>
            <ListItem component="button">
              <ListItemText primary="Videos" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default Postnav;
