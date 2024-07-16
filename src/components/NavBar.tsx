import { AppBar, Box, Toolbar } from "@mui/material";
import whiteLogo from "../assets/movix-white.png";
import darkLogo from "../assets/movix-black.png";
import ModeSwitcher from "./ModeSwitcher";
import { useTheme } from "@mui/material";

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
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
