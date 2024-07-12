import React from "react";
import { Card, CardMedia } from "@mui/material";

interface MediaCardProps {
  mediaType?: "image" | "video";
  mediaSrc?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  mediaType = "image",
  mediaSrc,
}) => {
  const defaultImage = "/images/photonvid.jpg";
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 auto",
        mt: "3vh",
        backgroundColor: "#0077b6",
        color: "white",
        borderRadius: "20px",
        boxSizing: "border-box",
      }}
    >
      {mediaType === "video" && mediaSrc ? (
        <CardMedia
          component="video"
          controls
          sx={{
            height: 350,
          }}
          src={mediaSrc}
        />
      ) : (
        <CardMedia
          component="img"
          sx={{
            height: 350,
          }}
          image={mediaSrc || defaultImage}
          alt="Media"
        />
      )}
    </Card>
  );
};

export default MediaCard;
