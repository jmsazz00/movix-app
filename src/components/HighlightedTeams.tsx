import { Grid, Paper, useTheme } from "@mui/material";
import HighlightedTeam from "./HighlightedTeam";

const HighlightedTeams = () => {
  const highlightedTeams = [
    "Barcelona",
    "Manchester City",
    "Real Madrid",
    "Bayern Munich",
    "Liverpool",
    "Manchester United",
    "Atletico Madrid",
    "Chelsea",
    "Arsenal",
    "Juventus",
    "Inter Milan",
    "Roma",
  ];
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {highlightedTeams.map((team) => (
        <Grid item xs={12} sm={6} md={4} key={team}>
          <Paper
            sx={{
              p: 2,
              minHeight: "400px",
              bgcolor: theme.palette.mode === "dark" ? "#000000cc" : "#e3f2fd",
            }}
          >
            <HighlightedTeam teamName={team} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HighlightedTeams;
