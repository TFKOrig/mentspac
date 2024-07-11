import React, { useState } from "react";
import { Grid, IconButton, Avatar, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profilebgkandavatar: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | undefined>(
    "/images/HDimgback.jpg"
  );
  const [avatarImage, setAvatarImage] = useState<string | undefined>(
    "/images/avatar.jpg"
  );

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
        sx={{
          position: "absolute",
          top: "84%",
          left: {
            xs: "5%", // Applies when the screen size is xs (0px and up)
            sm: "7%", // Applies when the screen size is sm (600px and up)
          },
          zIndex: 2,
        }}
      >
        <Avatar
          alt="Avatar"
          src={avatarImage}
          sx={{
            width: {
              xs: "130px",
              sm: "200px",
            },
            height: {
              xs: "130px",
              sm: "200px",
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
      </Grid>
    </Grid>
  );
};

export default Profilebgkandavatar;
