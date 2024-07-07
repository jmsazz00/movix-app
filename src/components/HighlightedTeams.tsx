import { Grid, Paper, CircularProgress } from "@mui/material";
import useTeams from "../hooks/useTeams";
import TeamCard from "./TeamCard";

const HighlightedTeams = () => {
  const { data: teams, isLoading, error } = useTeams();

  if (isLoading) return <CircularProgress />;

  if (error) return error;

  return (
    <Grid container spacing={3}>
      {teams?.teams?.map((team) => (
        <Grid item xs={12} sm={6} md={4} key={team.idTeam}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              minHeight: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <TeamCard teamData={team} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HighlightedTeams;
