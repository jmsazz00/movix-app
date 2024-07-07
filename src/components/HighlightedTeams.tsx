import { Grid, Paper } from "@mui/material";
import useTeams from "../hooks/useTeams";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

const HighlightedTeams = () => {
  const { data: teams, isLoading, error } = useTeams();

  const skeletonCount = [1, 2, 3, 4, 5, 6];

  if (error) return error;

  return (
    <Grid container spacing={3}>
      {isLoading
        ? skeletonCount.map((c) => (
            <Grid item xs={12} sm={6} md={4} key={c}>
              <TeamCardSkeleton />
            </Grid>
          ))
        : teams?.teams?.map((team) => (
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
