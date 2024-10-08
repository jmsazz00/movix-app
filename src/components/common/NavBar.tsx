import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import darkLogo from "../../assets/movix-black.png";
import whiteLogo from "../../assets/movix-white.png";
import "../../css/NavBar.css";
import useResponsive from "../../hooks/useResponsive";
import useScrollToTop from "../../hooks/useScrollToTop";
import navHeight from "../../utilities/navHeight";
import CustomizedInput from "./CustomizedInput";
import ModeSwitcher from "./ModeSwitcher";

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrollToTop = useScrollToTop(false);
  const { isMobile } = useResponsive();

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setSearchQuery("");
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 50);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedQuery = searchQuery.trim().replace(/\s+/g, " ");
    if (formattedQuery) {
      navigate(`/p/${encodeURIComponent(formattedQuery)}`);
      scrollToTop();
      setSearchQuery("");
    }
  };

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
              scrollToTop();
            }}
            sx={{
              mx: { xs: 1.25, md: 2 },
              display: "flex",
              cursor: "pointer",
            }}
          >
            <img
              src={theme.palette.mode === "dark" ? darkLogo : whiteLogo}
              alt="Logo"
              height={isMobile ? 36 : 45}
            />
          </Box>

          <CustomizedInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={handleSearchSubmit}
            placeholder="Search for players..."
            maxWidth="1000px"
          />

          <ModeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
