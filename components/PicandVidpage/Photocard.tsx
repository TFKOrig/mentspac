import React from "react";
import { Card, CardMedia } from "@mui/material";

interface ImageCardProps {
  imageSrc?: string;
}

const Photocard: React.FC<ImageCardProps> = ({ imageSrc }) => {

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
      <CardMedia
        component="img"
        sx={{
          height: 350,
        }}
        image={imageSrc || defaultImage}
        alt="Image"
      />
    </Card>
  );
};

export default Photocard;
