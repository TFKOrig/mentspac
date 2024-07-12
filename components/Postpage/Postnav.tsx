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
import PostsComponent from "../Postpage/Biocard";
import FollowersComponent from "../FollowersNFollowingpage/Followercard";
import FollowingComponent from "../FollowersNFollowingpage/Followingcard";
import PhotosComponent from "../PicandVidpage/Photocard";
import VideosComponent from "../PicandVidpage/Videocard";
const Postnav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Posts");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
    setDrawerOpen(false); 
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          margin: "0 auto",
          marginTop: "12vh",
          width: "70%",
          boxSizing: "border-box",
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
                gap: 5,
                color: "black",
                textAlign: "center",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  width: "8vw",
                  height: "5vh",
                  backgroundColor:
                    currentPage === "Posts"
                      ? "rgba(207, 247, 255, 1)"
                      : "rgb(207, 247, 255, 1)",
                  borderRadius: "14px",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "rgba(207, 247, 255, 1)",
                  },
                }}
                onClick={() => handlePageChange("Posts")}
              >
                Posts
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "11vw",
                  backgroundColor:
                    currentPage === "Followers"
                      ? "rgba(207, 247, 255, 1)"
                      : "rgb(207, 247, 255, 1)",
                  borderRadius: "14px",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "rgba(207, 247, 255, 1)",
                  },
                }}
                onClick={() => handlePageChange("Followers")}
              >
                Followers
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "11vw",
                  backgroundColor:
                    currentPage === "Following"
                      ? "rgba(207, 247, 255, 1)"
                      : "rgb(207, 247, 255, 1)",
                  fontSize: "0.9rem",
                  borderRadius: "14px",
                  "&:hover": {
                    backgroundColor: "rgba(207, 247, 255, 1)",
                  },
                }}
                onClick={() => handlePageChange("Following")}
              >
                Following
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "11vw",
                  backgroundColor:
                    currentPage === "Photos"
                      ? "rgba(207, 247, 255, 1)"
                      : "rgb(207, 247, 255, 1)",
                  borderRadius: "14px",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "rgba(207, 247, 255, 1)",
                  },
                }}
                onClick={() => handlePageChange("Photos")}
              >
                Photos
              </Button>
              <Button
                color="inherit"
                sx={{
                  width: "11vw",
                  backgroundColor:
                    currentPage === "Videos"
                      ? "rgba(207, 247, 255, 1)"
                      : "rgb(207, 247, 255, 1)",
                  borderRadius: "14px",
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "rgba(207, 247, 255, 1)",
                  },
                }}
                onClick={() => handlePageChange("Videos")}
              >
                Videos
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100vh",
            width: "32vw",
            backgroundColor: "rgb(2, 61, 138, 1)",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Posts", "Followers", "Following", "Photos", "Videos"].map(
              (text) => (
                <ListItem
                  key={text}
                  component="button"
                  onClick={() => handlePageChange(text)}
                  sx={{
                    textAlign: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                    width: "85%",
                    backgroundColor:
                      currentPage === text
                        ? "rgba(207, 247, 255, 1)"
                        : "rgb(207, 247, 255, 1)",
                    borderRadius: "14px",
                    fontSize: "0.9rem",
                  }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>

      {/* Content Area for Pages */}
      <Box sx={{ marginTop: "20px", textAlign: "center" }}>
        {currentPage === "Posts" && <PostsComponent />}
        {currentPage === "Followers" && <FollowersComponent />}
        {currentPage === "Following" && <FollowingComponent />}
        {currentPage === "Photos" && <PhotosComponent />}
        {currentPage === "Videos" && <VideosComponent />}
      </Box>
    </>
  );
};

export default Postnav;
