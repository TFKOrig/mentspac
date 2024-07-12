import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardHeader,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const BioCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 530,
        margin: "0 auto",
        mt: "3vh",
        ml: "14.7vw",
        backgroundColor: "#0077b6",
        color: "white",
        borderRadius: "20px",
        boxSizing: "border-box",
      }}
    >
      <CardHeader
        title="Bio"
        titleTypographyProps={{ variant: "h6" }}
        sx={{ color: "white", paddingBottom: 0 }}
      />
      <CardContent
        sx={{
          paddingTop: 2,
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            paddingLeft: "12%",
            paddingRight: "12%",
            // textAlign: "center",
            whiteSpace: "normal",
            wordBreak: "break-word",
            hyphens: "auto",
            overflow: "hidden",
          }}
        >
          A quick brown fox jumps over the lazy dog.A quick brown fox jumps over
          the lazy dog.A quick brown fox jumps over the lazy dog.A quick brown
          fox jumps over the lazy dog.A quick brown fox jumps over the lazy
          dog.A quick brown fox jumps over the lazy dog.
        </Typography>

        <CardHeader
          title="Social Links"
          titleTypographyProps={{ variant: "h6" }}
          sx={{ color: "white", paddingBottom: 0, paddingTop: 2 }}
        />

        <List>
          <ListItem>
            <ListItemIcon>
              <IconButton
                href="https://github.com/username"
                target="_blank"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="GitHub" sx={{ color: "white" }} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconButton
                href="https://linkedin.com/in/username"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="LinkedIn" sx={{ color: "white" }} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconButton
                href="https://twitter.com/username"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Twitter" sx={{ color: "white" }} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default BioCard;
