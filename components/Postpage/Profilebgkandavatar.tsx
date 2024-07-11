import React, { useState } from "react";
import { Box, IconButton, Avatar, Typography } from "@mui/material";
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
    <Box
      sx={{
        position: "relative",
        width: "70vw",
        height: "65vh",
        margin: "0 auto",
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    >
      <Avatar
        alt="Avatar"
        src={avatarImage}
        sx={{
          width: "200px",
          height: "200px",
          border: "2px solid rgba(3, 4, 94, 1)",
          position: "absolute",
          bottom: "-80px",
          left: "14%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 2,
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

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-background-input"
      />
      <label htmlFor="upload-background-input">
        <IconButton
          component="span"
          sx={{
            height: "2vh",
            position: "absolute",
            color: "black",
            bottom: "10px",
            right: "10px",
            border: "12px solid rgba(255,80,80,0)",
            borderRadius: "30px 30px 30px 30px",
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <PhotoCamera />
          <Typography sx={{ marginLeft: "5px", color: "black" }}>
            Edit Cover
          </Typography>
        </IconButton>
      </label>
    </Box>
  );
};

export default Profilebgkandavatar;
