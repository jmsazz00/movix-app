import { Box, Button, Grid } from "@mui/material";
import HighlightedTeam from "./HighlightedTeam";
import { useState } from "react";
import highlightedTeams from "../options/highlightedTeam";
import CustomGridItem from "./CustomGridItem";

const HighlightedTeams = () => {
  const INITIAL_TEAMS_LIMIT = 6;
  const [teamsLimit, setTeamsLimit] = useState(INITIAL_TEAMS_LIMIT);

  const teamsToShow = highlightedTeams.slice(0, teamsLimit);

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
