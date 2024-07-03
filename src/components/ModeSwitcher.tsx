import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ModeSwitcher = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {colorMode.colorMode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default ModeSwitcher;
