import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import darkLogo from "../assets/movix-black.png";
import whiteLogo from "../assets/movix-white.png";
import ModeSwitcher from "./ModeSwitcher";
import "../css/NavBar.css";

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    // Delay setting initialLoad to false to avoid flicker
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 50);

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
      clearTimeout(timer);
    };
  }, [lastScrollY]);

  return (
    <Box
      className={`navbar ${
        initialLoad
          ? "navbar-initial"
          : isHidden
          ? "navbar-hidden"
          : "navbar-visible"
      }`}
    >
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: "70px" }}
        >
          <Box
            onClick={() => {
              navigate("/");
              window.scroll({ top: 0 });
            }}
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
