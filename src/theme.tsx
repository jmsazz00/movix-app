import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ReactNode, createContext, useMemo, useState } from "react";
import GlobalStyles from "./GlobalStyles";

interface ColorModeType {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeType>(
  {} as ColorModeType
);

interface Props {
  children: ReactNode;
}

const ColorModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? (savedMode as "light" | "dark") : "dark";
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
