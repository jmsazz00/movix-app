import React, { useState, useEffect } from "react";
import { Fab, Tooltip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/material/styles";

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  transition: "opacity 0.3s ease, visibility 0.3s ease",
  visibility: "hidden",
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    width: 48, // For mobile devices
    height: 48,
  },
}));

const GoUpButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Tooltip title="Go to top" arrow>
      <StyledFab
        color="primary"
        aria-label="go-up"
        onClick={handleClick}
        style={{
          opacity: visible ? 1 : 0, // Smoothly fade in/out
          visibility: visible ? "visible" : "hidden", // Fully hide/show
        }}
      >
        <ArrowUpwardIcon />
      </StyledFab>
    </Tooltip>
  );
};

export default GoUpButton;
