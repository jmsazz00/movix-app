import { AppBar, Box, Toolbar } from "@mui/material";
import whiteLogo from "../assets/movix-white.png";
import darkLogo from "../assets/movix-black.png";
import ModeSwitcher from "./ModeSwitcher";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box mb={1}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            onClick={() => {
              navigate("/");
            }}
            sx={{
              mx: 2,
              display: "flex",
              cursor: "pointer",
            }}
          >
            <img src={theme.palette.mode === "dark" ? darkLogo : whiteLogo} />
          </Box>
          <ModeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
