import React, { useState } from "react";
import { Grid, IconButton, Avatar, Typography, Box } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profilebgkandavatar: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | undefined>(
    "/images/HDimgback.jpg"
  );
  const [avatarImage, setAvatarImage] = useState<string | undefined>(
    "/images/avatar.jpg"
  );
  const [userName, setUserName] = useState<string>("Jhon Doe");
  const [followers, setFollowers] = useState<number>(120);
  const [following, setFollowing] = useState<number>(180);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (event.target.id === "upload-background-input") {
          setBgImage(reader.result as string);
        } else if (event.target.id === "upload-avatar-input") {
          setAvatarImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    const uploadAvatarInput = document.getElementById("upload-avatar-input");
    if (uploadAvatarInput) {
      uploadAvatarInput.click();
    }
  };

  const handleAvatarFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          width: "70vw",
          height: "65vh",
          margin: "0 auto",
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          sx={{
            position: "absolute",
            top: {
              xs: "96%",
              sm: "89%",
              md: "89%",
            },
            left: {
              xs: "3%",
              sm: "4%",
            },
            zIndex: 2,
          }}
        >
          <Avatar
            alt="Avatar"
            src={avatarImage}
            sx={{
              width: {
                xs: "70px",
                sm: "150px",
                md: "200px",
              },
              height: {
                xs: "70px",
                sm: "150px",
                md: "200px",
              },
              border: "2px solid rgba(3, 4, 94, 1)",
              cursor: "pointer",
            }}
            onClick={handleAvatarClick}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarFileChange}
            style={{ display: "none" }}
            id="upload-avatar-input"
          />
        </Grid>

        <Grid
          item
          sx={{
            position: "absolute",
            bottom: "2%",
            right: { sm: "1%", xs: "2%" },
            zIndex: 2,
          }}
        >
          <label htmlFor="upload-background-input">
            <IconButton
              component="span"
              sx={{
                color: "black",
                border: "12px solid rgba(255,80,80,0)",
                borderRadius: "30px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              <PhotoCamera />
              <Typography
                sx={{
                  marginLeft: "5px",
                  color: "black",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Edit Cover
              </Typography>
            </IconButton>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="upload-background-input"
          />
          <Box
            sx={{
              display: "flex",
              margingTop: "1vh",
              textAlign: "center",
              marginTop: 2,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Box
        component="div"
        sx={{
          width: "70%",
          height: "50%",
          display: "flex",
          margin: "0 auto",
          marginTop: "1vh",
          justifyContent: "space-between",
        }}
      >
        <Box
         
          component="div"
          sx={{ display: "flex", justifyContent: "flex-end", width: "31%" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1.5rem",
                md: "2rem",
              },
              fontWeight: "400",
              color: "black",
            }}
          >
            {userName}
          </Typography>
        </Box>
        <Box
          
          component="div"
          sx={{ display: "flex",justifyContent: "flex-end", width: "50%" }}
        >
          <Typography variant="body1" color="black">
            {followers} Followers
          </Typography>
          <Typography variant="body1" color="black">
            {following} Following
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Profilebgkandavatar;
