import { Box, Button, Grid, Paper, useTheme } from "@mui/material";
import HighlightedTeam from "./HighlightedTeam";
import { useState } from "react";
import highlightedTeams from "../options/highlightedTeams.1";

const HighlightedTeams = () => {
  const INITIAL_TEAMS_LIMIT = 6;
  const [teamsLimit, setTeamsLimit] = useState(INITIAL_TEAMS_LIMIT);
  const theme = useTheme();

  const teamsToShow = highlightedTeams.slice(0, teamsLimit);

  return (
    <Box>
      <Grid container spacing={3}>
        {teamsToShow.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team}>
            <Paper
              sx={{
                p: 2,
                minHeight: "400px",
                bgcolor:
                  theme.palette.mode === "dark" ? "#000000cc" : "#e3f2fd",
              }}
            >
              <HighlightedTeam teamName={team} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {teamsLimit >= highlightedTeams.length ? null : (
        <Box display={"flex"} justifyContent={"flex-end"} m={2}>
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
