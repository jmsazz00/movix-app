import { Global, css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
        ::-webkit-scrollbar-track {
          background-color: ${theme.palette.mode === "dark"
            ? "#2a2a2a"
            : "#eaf4ff"};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.palette.mode === "dark"
            ? "#444"
            : "#b3cde0"};
          border-radius: 10px;
          transition: background-color 0.3s, width 0.3s;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.palette.mode === "dark"
            ? "#666"
            : "#9ab4c9"};
        }
      `}
    />
  );
};

export default GlobalStyles;
