import { Box, Paper, styled } from "@mui/material";
import NavBar from "./NavBar";
import { Typography } from "@mui/material";
import CountriesList from "./CountriesList";
import MainContent from "./MainContent";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GridLayout = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateAreas={{ xs: `"nav" "main"`, md: `"nav nav"  "aside main"` }}
      gridTemplateColumns={{ sm: "1fr", md: "125px 1fr" }}
      gap={1}
    >
      <Box gridArea={"nav"}>
        <NavBar />
      </Box>

      <Box gridArea={"aside"} sx={{ display: { xs: "none", md: "block" } }}>
        <Item>
          <CountriesList />
        </Item>
      </Box>

      <Box gridArea={"main"}>
        <Item>
          <Typography variant="h2">
            <MainContent />
          </Typography>
        </Item>
      </Box>
    </Box>
  );
};

export default GridLayout;
