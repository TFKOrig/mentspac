import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProfileCardProps {
  image?: string;
  name?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name }) => {
  const defaultImage = "/images/userimg.jpg";
  const defaultName = "John Doe";
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: 450,
        height: 200,
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
          width: 150,
          height: 150,
          borderRadius: "8%",
          ml: "10%",
        }}
        image={image || defaultImage}
        alt="Profile Image"
      />
      <CardContent sx={{ flex: "1 0 auto", mb: "12%", mr: "15%" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "400",
            textAlign: "center",
            paddingTop: 10,
            fontSize: "2rem",
          }}
        >
          {name || defaultName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
