import React from "react";
import { Card, CardMedia } from "@mui/material";

interface VideoCardProps {
  videoSrc?: string;
}

const Videocard: React.FC<VideoCardProps> = ({ videoSrc }) => {
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
      <CardMedia
        component="video"
        controls
        sx={{
          height: 350,
        }}
        src={videoSrc}
      />
    </Card>
  );
};

export default Videocard;
