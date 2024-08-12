import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import darkLogo from "../assets/movix-black.png";
import whiteLogo from "../assets/movix-white.png";
import ModeSwitcher from "./ModeSwitcher";

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navHeight = 78;

      if (currentScrollY > navHeight && currentScrollY > lastScrollY)
        setIsHidden(true);
      else setIsHidden(false);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box
      sx={{
        mb: 1,
        position: "sticky",
        top: 0,
        width: "100%",
        transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        opacity: isHidden ? 0 : 1,
        zIndex: 1100,
      }}
    >
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: "70px" }}
        >
          <Box
            onClick={() => navigate("/")}
            sx={{
              mx: 2,
              display: "flex",
              cursor: "pointer",
            }}
          >
            <img
              src={theme.palette.mode === "dark" ? darkLogo : whiteLogo}
              alt="Logo"
              height={45}
            />
          </Box>
          <ModeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
