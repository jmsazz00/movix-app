import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import darkLogo from "../assets/movix-black.png";
import whiteLogo from "../assets/movix-white.png";
import ModeSwitcher from "./ModeSwitcher";
import "../css/NavBar.css";
import useScrollToTop from "../hooks/useScrollToTop";

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop(false);

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/players?name=${encodeURIComponent(searchQuery.trim())}`);
      scrollToTop();
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

          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              mx: 2,
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              maxWidth: "900px",
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Search for players..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#333" : "#f1f1f1",
                },
                "& .MuiInputBase-placeholder": {
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.6)",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton type="submit" aria-label="search" sx={{ p: 0 }}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <ModeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
