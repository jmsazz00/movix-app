import { Box, Divider, ListItem } from "@mui/material";
import React from "react";

interface TimelineItemProps {
  index: number;
  totalItems: number;
  children: React.ReactNode;
}

const TimelineItem = ({ index, totalItems, children }: TimelineItemProps) => {
  return (
    <ListItem sx={{ alignItems: "center", padding: "16px 0", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "8px",
          height: "8px",
          backgroundColor: "secondary.main",
          borderRadius: "50%",
        }}
      />
      {index < totalItems - 1 && (
        <Divider
          orientation="vertical"
          sx={{
            position: "absolute",
            left: "4px",
            top: "50%",
            height: "calc(100% + 32px)",
            backgroundColor: "secondary.main",
          }}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", ml: 3 }}>
        {children}
      </Box>
    </ListItem>
  );
};

export default TimelineItem;
