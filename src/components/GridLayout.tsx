import { Box, Paper, styled } from "@mui/material";
import CountriesList from "./CountriesList";
import MainContent from "./MainContent";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const GridLayout = () => {
  const navHeight = 96;

  return (
    <Box
      display={"grid"}
      gridTemplateAreas={{ xs: `"main"`, md: `"aside main"` }}
      gridTemplateColumns={{ sm: "1fr", md: "125px 1fr" }}
      gridTemplateRows={{ xs: "1fr", md: "1fr" }}
      gap={1}
    >
      <Box
        gridArea={"aside"}
        sx={{ display: { xs: "none", md: "block" }, position: "relative" }}
      >
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
          <MainContent />
        </Item>
      </Box>
    </Box>
  );
};

export default GridLayout;
