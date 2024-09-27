import { Box, Button, Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import highlightedTeams from "../../utilities/highlightedTeam";
import CustomGridItem from "../common/CustomGridItem";
import HighlightedTeam from "./HighlightedTeam";

const HighlightedTeams = () => {
  const INITIAL_TEAMS_LIMIT = 6;

  const storedTeamsLimit = localStorage.getItem("teamsLimit");
  const initialLimit = storedTeamsLimit
    ? parseInt(storedTeamsLimit, 10)
    : INITIAL_TEAMS_LIMIT;
  const [teamsLimit, setTeamsLimit] = useState(initialLimit);

  const teamsToShow = useMemo(
    () => highlightedTeams.slice(0, teamsLimit),
    [teamsLimit]
  );

  useEffect(() => {
    localStorage.setItem("teamsLimit", teamsLimit.toString());
  }, [teamsLimit]);

  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        {teamsToShow.map((team) => (
          <CustomGridItem key={team}>
            <HighlightedTeam teamName={team} />
          </CustomGridItem>
        ))}
      </Grid>
      {teamsLimit < highlightedTeams.length && (
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
