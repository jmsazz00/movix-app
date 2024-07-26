import { Box, Paper, styled } from "@mui/material";
import NavBar from "./NavBar";
import CountriesList from "./CountriesList";
import MainContent from "./MainContent";
import { useState } from "react";
import SortOption from "../entities/SortOption";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const GridLayout = () => {
  const [currentCountry, setCurrentCountry] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name_asc");

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
          <MainContent
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedCountry={currentCountry}
          />
        </Item>
      </Box>
    </Box>
  );
};

export default GridLayout;
