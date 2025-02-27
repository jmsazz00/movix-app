import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

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

const GoUpButton = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = useScrollToTop(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scrollToTop();
  };

  return (
    <Tooltip title="Go to top" arrow>
      <StyledFab
        color="primary"
        aria-label="go-up"
        onClick={handleClick}
        style={{
          opacity: visible ? 1 : 0, 
          visibility: visible ? "visible" : "hidden", 
        }}
      >
        <ArrowUpwardIcon />
      </StyledFab>
    </Tooltip>
  );
};

export default GoUpButton;
