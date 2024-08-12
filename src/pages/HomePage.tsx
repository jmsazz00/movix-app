import { Box, Paper, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import CountriesList from "../components/CountriesList";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fcfcfc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderTop:
    theme.palette.mode === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
}));

const HomePage = () => {
  const navHeight = 78;

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
            <CountriesList />
          </Item>
        </Box>
      </Box>

      <Box gridArea={"main"}>
        <Item>
          <Outlet />
        </Item>
      </Box>
    </Box>
  );
};

export default HomePage;
