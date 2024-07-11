import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
const Profilebgkandavatar: React.FC = () => {

  const [bgImage, setBgImage] = useState<string | undefined>(
    "/images/HDimgback.jpg"
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70vw",
        height: "65vh",
        margin: "0 auto",
        position: "relative",
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-image-input"
      />
      <label htmlFor="upload-image-input">
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
