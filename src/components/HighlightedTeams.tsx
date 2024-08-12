import { Box, Button, Grid } from "@mui/material";
import HighlightedTeam from "./HighlightedTeam";
import { useState, useEffect } from "react";
import highlightedTeams from "../options/highlightedTeam";
import CustomGridItem from "./CustomGridItem";

const HighlightedTeams = () => {
  const INITIAL_TEAMS_LIMIT = 6;

  const storedTeamsLimit = localStorage.getItem("teamsLimit");
  const initialLimit = storedTeamsLimit
    ? parseInt(storedTeamsLimit, 10)
    : INITIAL_TEAMS_LIMIT;
  const [teamsLimit, setTeamsLimit] = useState(initialLimit);

  const teamsToShow = highlightedTeams.slice(0, teamsLimit);

  useEffect(() => {
    localStorage.setItem("teamsLimit", teamsLimit.toString());
  }, [teamsLimit]);

  return (
    <Box>
      <Grid container spacing={3}>
        {teamsToShow.map((team) => (
          <CustomGridItem key={team}>
            <HighlightedTeam teamName={team} />
          </CustomGridItem>
        ))}
      </Grid>
      {teamsLimit >= highlightedTeams.length ? null : (
        <Box display={"flex"} justifyContent={"center"} m={2}>
          <Button
            variant="outlined"
            onClick={() => setTeamsLimit(teamsLimit + INITIAL_TEAMS_LIMIT)}
          >
            Load More...
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HighlightedTeams;
