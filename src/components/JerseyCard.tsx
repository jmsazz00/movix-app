import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import useModalStore from "../store/ModalStore";

interface JerseyCardProps {
  image: string;
  type: string;
  season: string;
}

const JerseyCard: React.FC<JerseyCardProps> = ({ image, type, season }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Card
      onClick={() => openModal(image)}
      sx={{
        minWidth: 220,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
        position: "relative",
        overflow: "visible",
        cursor: "pointer",
      }}
    >
      {/* Jersey Type Ribbon */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "primary.dark" : "primary.light",
          color: "white",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        {type}
      </Box>

      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <CardMedia
          component="img"
          image={image + "/small"}
          alt={`Jersey for season ${season}`}
          sx={{
            objectFit: "contain",
            maxHeight: "160px",
            width: "auto",
          }}
        />
      </Box>
    </Card>
  );
};

export default JerseyCard;
