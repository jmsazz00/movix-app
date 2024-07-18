import { Box, Paper, styled } from "@mui/material";
import NavBar from "./NavBar";
import CountriesList from "./CountriesList";
import MainContent from "./MainContent";
import { useState } from "react";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GridLayout = () => {
  const [currentCountry, setCurrentCountry] = useState("");

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
          <CountriesList
            onSelectCountry={(e) => setCurrentCountry(e)}
            selectedCountry={currentCountry}
          />
        </Item>
      </Box>

      <Box gridArea={"main"}>
        <Item>
          <MainContent selectedCountry={currentCountry} />
        </Item>
      </Box>
    </Box>
  );
};

export default GridLayout;
