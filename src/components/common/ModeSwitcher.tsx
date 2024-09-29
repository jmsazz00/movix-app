import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ModeSwitcher = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: 1,
        p: { xs: 0.5, md: 1.75 },
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default ModeSwitcher;
