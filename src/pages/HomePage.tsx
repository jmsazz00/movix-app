import { Box, Paper, styled, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import CountryDropdown from "../components/countries/CountryDropdown";
import CountryList from "../components/countries/CountryList";
import navHeight from "../utilities/navHeight";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fcfcfc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderTop:
    theme.palette.mode === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
}));

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display={"grid"}
      gridTemplateAreas={{ xs: `"main"`, md: `"aside main"` }}
      gridTemplateColumns={{ sm: "1fr", md: "125px 1fr" }}
      gridTemplateRows={{ xs: "1fr", md: "1fr" }}
      gap={1}
    >
      <Box gridArea={"aside"} sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            height: `calc(100vh - ${navHeight}px)`,
            position: "sticky",
            top: navHeight,
            overflowY: "auto",
          }}
        >
          <Item>
            <CountryList />
          </Item>
        </Box>
      </Box>

      <Box gridArea={"main"}>
        <Item>
          {isSmallScreen && <CountryDropdown />}
          <Outlet />
        </Item>
      </Box>
    </Box>
  );
};

export default HomePage;
